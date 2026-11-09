# 教师工作量与排班负荷审计示例

## 典型场景

某教师周课时不高，但每晚上课、跨两个校区并负责大量家长沟通。

## 具体示例

系统用总任务负荷和恢复窗口呈现风险，建议合并校区任务或调整反馈流程。

## 脱敏输入示例

```json
{
  "contract_version": "1.2.0",
  "data_status": "confirmed",
  "contains_sensitive_data": false,
  "requested_output_language": "zh-CN",
  "teachers": [
    {}
  ],
  "schedule_entries": [
    {}
  ],
  "task_time_standards": {},
  "commute_data": [
    {}
  ],
  "rest_rules": "恢复窗口与限制已核对（脱敏示例）",
  "role_scope": "岗位范围已核对（脱敏示例）",
  "audit_period": "审计周期已核对（脱敏示例）"
}
```

## 预期处理

1. 运行输入契约校验。
2. 逐项核对输入来源、版本和口径。
3. 按`references/PROFESSIONAL_PLAYBOOK.md`完成专业分析。
4. 输出工作负荷表、热区、调整方案等核心成果。
5. 由业务负责人确认输入事实、关键假设和最终成果适用范围后才可作为正式业务结论。

## 不应出现的输出

- 虚构政策、价格、人员、课程或客户事实。
- 以“暂无”“待完善”等占位文本冒充完成。
- 无依据的确定性判断或伪造人工签批。
