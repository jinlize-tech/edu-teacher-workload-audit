# 使用说明

## 适用任务

某教师周课时不高，但每晚上课、跨两个校区并负责大量家长沟通。

## 准备输入

教师名单、课表、备课/作业/沟通标准工时、跨校区安排、休息时间、岗位职责、个人限制（可选）。使用前先脱敏姓名、联系方式和与任务无关的敏感信息。

## 操作步骤

1. 建立任务清单
2. 汇总每周负荷
3. 检查连续与通勤
4. 比较团队分布
5. 识别高风险
6. 生成排班/减负建议

## 校验命令

```powershell
node scripts/validate_input.js examples/typical_input.json
node scripts/validate_output.js examples/typical_output.json
```

## 状态使用

- `completed`：核心成果完整。
- `completed_with_limits`：只完成可验证部分，并说明受阻范围。
- `needs_input`：缺少关键输入。
- `needs_confirmation`：资料冲突或需人工确认。
- `failed`：工具或计算失败，提供恢复动作。

## 人工确认

业务负责人复核输入事实、关键假设和最终成果适用范围后，成果才可进入正式业务使用。
