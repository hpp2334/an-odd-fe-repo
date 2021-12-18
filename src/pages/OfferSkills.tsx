import { Box, Typography, styled, Slider } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Fluid } from "../components/Fluid";
import { SectionBlock } from "../components/Section";

const Title = styled("div")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

const SubTitle = styled("div")(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.secondary,
}));

const skills = [
  {
    title: "计算机基础",
    subTitle: [],
    items: [
      [0, "计算机网络: TCP/UDP, 网络模型, HTTP, HTTP/2, HTTPS, ..."],
      [0, "操作系统: 线程/进程, ..."],
      [0, "数据结构与算法: 栈, 队列, 二叉树, ..."],
      [0, "..."],
    ],
  },
  {
    title: "前端基础技术",
    subTitle: [],
    items: [
      [0, "HTML5"],
      [0, "CSS"],
      [0, "JavaScript, ES6+"],
    ],
  },
  {
    title: "流行的 Web 前端框架",
    subTitle: [
      ["=0", "2 选 1即可"],
      [
        "=50",
        "2 选 1即可，如果能掌握 1 个的同时了解其他框架的异同会更好",
      ],
      ['=100', '目前国内用 Angular 不多']
    ],
    items: [
      [50, "React"],
      [50, "Vue"],
      [100, "Angular"],
    ],
  },
  {
    title: "Node 技术",
    subTitle: [[0, "JavaScript 写本地工具、Server"]],
    items: [
      [50, "Node"],
      [50, "Node 框架: Express, Koa, NestJS"],
    ],
  },
  {
    title: "前端工程化",
    subTitle: [],
    items: [
      [100, "流程工具: Gulp"],
      [100, "构建工具: Babel, SWC, es-build"],
      [100, "打包工具: Webpack"],
      [100, "Lint 工具: ESLint"],
      [100, "代码格式化工具: Prettier"],
    ],
  },
  {
    title: "前端测试",
    subTitle: [],
    items: [
      [100, "单元测试: Jest"],
      [100, "集成测试: Cypress"],
      [100, "headless 自动化测试: Pupeteer"],
    ],
  },
  {
    title: "前端其他",
    subTitle: [],
    items: [
      [50, "前端安全"],
      [100, "前端性能"],
      ["=50", "网络请求: AJAX"],
      ["=100", "网络请求: AJAX, WebSocket"],
      [100, "异步流控制: RxJS"],
    ],
  },
  {
    title: "其他技术",
    subTitle: [[100, "可以根据 兴趣/业务 学习"]],
    items: [
      [100, "跨端技术: React Native, Weex, Flutter"],
      [100, "微信小游戏、小程序"],
      [100, "前端可视化技术"],
      [100, "WebAssembly"],
    ],
  },
];

const offerSkillLevelMasks = [
  {
    value: 0,
    label: "最低限度",
  },
  {
    value: 50,
    label: "推荐",
  },
  {
    value: 100,
    label: "比较完整的",
  },
];

function valueLabelFormat(value: number) {
  return offerSkillLevelMasks.findIndex((mark) => mark.value === value) + 1;
}

export const OfferSkills = () => {
  const [offerSkillLevelValue, setOffetSkillLevelValue] = useState(0);

  const matchLevel = useCallback((level: number | string) => {
    return (
      (typeof level === "string" && level === "=" + offerSkillLevelValue) ||
      (typeof level === "number" && offerSkillLevelValue >= level)
    );
  }, [offerSkillLevelValue]);

  return (
    <SectionBlock sx={{ backgroundColor: "#eee" }}>
      <Fluid>
        <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 4 }}>
          为了拿到 Offer，建议掌握什么？
        </Typography>
      </Fluid>
      <Fluid>
        <Slider
          sx={{
            marginBottom: 8,
            marginLeft: 3,
            width: 200,
          }}
          step={null}
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          value={offerSkillLevelValue}
          onChange={(_e, value) => {
            setOffetSkillLevelValue(value as number);
          }}
          valueLabelDisplay="off"
          marks={offerSkillLevelMasks}
        />
      </Fluid>
      <Fluid>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sx: "auto",
              sm: "200px auto",
            },
            gap: ["15px", "30px 15px"],
          }}
        >
          {skills.map((skill, index) => {
            const title = skill.title;
            const subTitle = skill.subTitle.find(([level]) =>
              matchLevel(level)
            )?.[1];
            const details = skill.items
              .filter(([level]) => matchLevel(level))
              .map((item) => item[1]);

            if (details.length === 0) {
              return null;
            } else {
              return (
                <React.Fragment key={index}>
                  <div>
                    <Title>{title}</Title>
                    {subTitle && <SubTitle>{subTitle}</SubTitle>}
                  </div>
                  <ul>
                    {details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </React.Fragment>
              );
            }
          })}
        </Box>
      </Fluid>
      <Fluid>
        <Typography variant='caption'>讲道理，看面经比较保险，无论是 实习, 春招秋招，还是社招。</Typography>
      </Fluid>
    </SectionBlock>
  );
};
