import type { ChangelogConfig } from "changelogen";

export default <Partial<ChangelogConfig>>{
  types: {
    feat: {
      title: "🚀 功能发",
      semver: "minor",
    },
    perf: {
      title: "🔥 性能",
      semver: "patch",
    },
    fix: {
      title: "🩹 修复",
      semver: "patch",
    },
    refactor: {
      title: "💅 重构",
      semver: "patch",
    },
    docs: {
      title: "📖 文档",
      semver: "patch",
    },
    build: {
      title: "📦 构建",
      semver: "patch",
    },
    types: {
      title: "🌊 类型",
      semver: "patch",
    },
    chore: {
      title: "🏡 其他",
    },
    examples: {
      title: "🏀 示例",
    },
    test: {
      title: "✅ 测试",
    },
    style: {
      title: "🎨 样式",
    },
    ci: {
      title: "🤖 持续集成",
    },
  },
};
