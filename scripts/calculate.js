'use strict';

const FORMULA_VERSION = '1.0.0';

function fail(code, message, field) {
  return { ok: false, error: { code, message, field: field || null, formula_version: FORMULA_VERSION } };
}

function money(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function finiteNumber(value, field, minimum) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  return value;
}

function ratio(value, field) {
  finiteNumber(value, field, 0);
  if (value > 1) throw new Error(`INPUT_INVALID:${field}`);
  return value;
}

function run(fn, input) {
  try {
    return { ok: true, formula_version: FORMULA_VERSION, result: fn(input) };
  } catch (error) {
    const [code, field] = String(error.message).split(':');
    return fail(code || 'CALCULATION_FAILED', code === 'INPUT_INVALID' ? '输入缺失或非法' : String(error.message), field);
  }
}

function calculateImpl(input) {
  const keys = ['teaching', 'preparation', 'feedback', 'parent_communication', 'admin', 'commute'];
  let workload = 0;
  for (const key of keys) workload += finiteNumber(input[key], key, 0);
  const available = finiteNumber(input.available_hours, 'available_hours', 0.01);
  const loadRatio = workload / available;
  return {
    workload_hours: money(workload),
    load_ratio: loadRatio,
    remaining_hours: money(available - workload),
    status: loadRatio > 1 ? 'OVERLOAD' : loadRatio >= 0.9 ? 'NEAR_LIMIT' : 'WITHIN_LIMIT',
    included_tasks: keys,
    unit: '小时',
  };
}

function calculate(input) {
  return run(calculateImpl, input || {});
}

module.exports = { calculate, FORMULA_VERSION };
