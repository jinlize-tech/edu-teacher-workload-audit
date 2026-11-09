# 输入输出契约

## 输入字段

| 键 | 名称 | 类型 | 必填 |
|---|---|---|---|
| `teachers` | 教师清单 | array | 是 |
| `schedule_entries` | 课表与任务 | array | 是 |
| `task_time_standards` | 任务工时标准 | object | 是 |
| `commute_data` | 跨校区与通勤 | array | 否 |
| `rest_rules` | 恢复窗口与限制 | string | 是 |
| `role_scope` | 岗位范围 | string | 是 |
| `audit_period` | 审计周期 | string | 是 |

## 状态

- `completed`：核心成果完整，关键结论人工确认要求满足。
- `completed_with_limits`：至少一项实质成果，说明限制、已完成和受阻范围。
- `needs_input`：必填字段缺失。
- `needs_confirmation`：资料冲突或人工确认未完成。
- `failed`：计算或工具失败。

## 输出

- `工作负荷表`：结构化条目数组，不允许空壳或占位文本。
- `热区`：结构化条目数组，不允许空壳或占位文本。
- `连续授课`：结构化条目数组，不允许空壳或占位文本。
- `通勤风险`：结构化条目数组，不允许空壳或占位文本。
- `团队差异`：结构化条目数组，不允许空壳或占位文本。
- `调整方案`：结构化条目数组，不允许空壳或占位文本。
- `复核指标`：结构化条目数组，不允许空壳或占位文本。

完整机器契约见`contract/input.schema.json`、`contract/output.schema.json`和`contract/runtime_contract.json`。
