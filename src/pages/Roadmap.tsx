import {
  Box,
  Divider,
  Link,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Fluid } from "../components/Fluid";
import { SectionBlock, SectionTitle } from "../components/Section";

const PossibleQuickStartRoadMap = () => {
  const [step, setStep] = useState(0);
  const handleStep = (to: number) => () => {
    setStep(to);
  };

  return (
    <div>
      <Stepper nonLinear activeStep={step}>
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
              <li>尝试写一个Todo List</li>
            </ul>
            <Typography variant="h6">资料</Typography>
            <ul>
              <li>《JavaScript 高级程序设计 （简称 "高程"）》</li>
              <li>《你不知道的 JavaScript》</li>
            </ul>
          </>
        )}
        {step == 1 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>选一个学习现代 Web 框架</li>
              <li>尝试写一个 Todo List</li>
            </ul>
          </>
        )}
        {step === 2 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>跟 Express 官网学习写 Server</li>
            </ul>
          </>
        )}
        {step === 3 && (
          <>
            <Typography variant="h6">目标</Typography>
            <ul>
              <li>
                学 TypeScript 尝试写一个自己感兴趣的相对简单的前后端项目，比如
                个人博客、评论系统、...
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
