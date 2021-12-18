import {
  Box,
  Divider,
  Link,
  Step,
  StepButton,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Fluid } from "../components/Fluid";
import { IFrame } from "../components/Iframe";
import { SectionBlock, SectionTitle } from "../components/Section";

const PossibleQuickStartRoadMap = () => {
  const [step, setStep] = useState(0);
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  const handleStep = (to: number) => () => {
    setStep(to);
  };

  return (
    <div>
      <Stepper
        nonLinear
        activeStep={step}
        orientation={matchSM ? "horizontal" : "vertical"}
      >
        <Step>
          <StepButton onClick={handleStep(0)}>Stage 1: 写基础网页</StepButton>
        </Step>
        <Step>
          <StepButton onClick={handleStep(1)}>Stage 2: 用框架写网页</StepButton>
        </Step>
        <Step>
          <StepButton onClick={handleStep(2)}>
            Stage 3: 开始用 Node 写小玩意
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={handleStep(3)}>Stage 4: 初试全栈</StepButton>
        </Step>
      </Stepper>
      <Box sx={{ marginTop: 5, marginBottom: 5 }}>
        {step === 0 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>学习 HTML5, CSS, JavaScript</li>
              <li>学习现代 JavaScript (ES6 +)</li>
              <li>尝试写一个 Counter</li>
            </ul>
            <Typography variant="h6">资料</Typography>
            <ul>
              <li>《JavaScript 高级程序设计 》（简称 "高程"）</li>
              <li>《你不知道的 JavaScript》</li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://www.runoob.com/html/html-tutorial.html"
                >
                  菜鸟教程 - HTML
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://www.runoob.com/css/css-tutorial.html"
                >
                  菜鸟教程 - CSS
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://www.runoob.com/js/js-tutorial.html"
                >
                  菜鸟教程 - JavaScript
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://zh.javascript.info/"
                >
                  现代 JavaScript 教程
                </Link>
              </li>
            </ul>
            <Typography>以下是一个使用基础 HTML + CSS + JavaScript 编写的 counter</Typography>
            <IFrame src="https://codepen.io/hpp2334/embed/poWPGXL?default-tab=html%2Cresult" />
          </>
        )}
        {step == 1 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>选一个学习现代 Web 框架</li>
              <li>尝试写一个 Todo List</li>
              <li>尝试集成状态管理、路由管理</li>
            </ul>
            <Typography variant="h6">资料</Typography>
            <Typography variant='caption'>*笔者是 React 党，因此资料更偏向 React</Typography>
            <ul>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://beta.reactjs.org/"
                >
                  英文 React 文档 (beta)
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://zh-hans.reactjs.org/"
                >
                  中文 React 文档
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://reactrouter.com/docs/en/v6"
                >
                  React Router
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://react-redux.js.org/"
                >
                  React Redux
                </Link>
              </li>
            </ul>
          </>
        )}
        {step === 2 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>学习 Node</li>
              <li>了解与使用包管理工具 npm （也可以一开始就使用 yarn）</li>
              <li>跟 Express 官网学习写 Server</li>
              <li>尝试写一个 CLI</li>
            </ul>
            <Typography variant="h6">资料</Typography>
            <ul>
              <li>《狼书（卷1）：更了不起的Node.js》</li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://www.runoob.com/nodejs/nodejs-tutorial.html"
                >
                  菜鸟教程 - Node
                </Link>
              </li>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://expressjs.com/"
                >
                  Express
                </Link>
              </li>
            </ul>
          </>
        )}
        {step === 3 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>学 TypeScript，让编译器帮你检查 bug</li>
              <li>
                尝试写一个自己感兴趣的相对简单的前后端项目，比如
                个人博客、评论系统、...
              </li>
            </ul>
            <Typography variant="h6">资料</Typography>
            <ul>
              <li>
                <Link
                  underline="hover"
                  target="_blank"
                  href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
                >
                  TypeScript 文档
                </Link>
              </li>
            </ul>
          </>
        )}
      </Box>
    </div>
  );
};

const InDepth = () => (
  <div>
    <Typography variant="h5">前端技术</Typography>
    <Typography variant="body2">此部分受限于笔者的技术水平与知识水平。</Typography>
    <ul>
      <li>
        <Link
          href="https://roadmap.sh/frontend"
          underline="hover"
          target="_blank"
        >
          roadmap.sh
        </Link>{" "}
        提供了当前技术的路线图 (后端也有哦 ~)
      </li>
      <li>
        <Link
          href="https://fullstackopen.com/zh/about"
          underline="hover"
          target="_blank"
        >
          Full Stackopen
        </Link>{" "}
        提供了完整的全栈教程
      </li>
    </ul>
    <Typography variant="h5">心法</Typography>
    <ul>
      <li>设计模式</li>
      <li>函数式编程: lodash/fp, RamdaJS</li>
      <li>响应式编程: RxJS</li>
    </ul>
  </div>
);

export const Roadmap = () => {
  return (
    <SectionBlock>
      <Fluid>
        <SectionTitle>笔者认为可能的入门 Roadmap</SectionTitle>
        <PossibleQuickStartRoadMap />
        <Divider />
        <SectionTitle>进阶？</SectionTitle>
        <InDepth />
      </Fluid>
    </SectionBlock>
  );
};
