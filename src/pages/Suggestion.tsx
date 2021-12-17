import { styled } from "@mui/material";
import React from "react";
import Del from "../components/Del";
import { Fluid } from "../components/Fluid";
import { SectionBlock, SectionTitle } from "../components/Section";
import { Strong } from "../components/Strong";

const Title = styled("div")(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  marginTop: theme.spacing(4),
}));

export const Suggestion = () => {
  return (
    <SectionBlock sx={{ backgroundColor: "#eee" }}>
      <Fluid>
        <SectionTitle>一些个人看法</SectionTitle>
        <Title>计算机基础很重要</Title>
        <div>
          课业内学习的 高等数学、离散数学、SQL, 数据结构,
          算法等基础知识，尽管工作中不经常使用
          (尤其对于前端)，但比前端本身重要的多。正所谓，<Strong>"基础不牢，天崩地裂"</Strong>。
        </div>
        <Title>
          学而不思则罔，思而不学则殆<Del>，不思而不学则乐</Del>
        </Title>
        <div>
          不管是课内的学习，还是前端技术的学习，这点都很重要，举几个例子
          <ul>
            <li>为什么会出现 babel 这类转译工具，webpack 这类打包工具？</li>
            <li>
              为什么目前流行于使用框架编程，而不是手写 HTML + CSS +
              JS？为什么大厂偏爱 React？为什么国内 Angular 用的少？
            </li>
            <li>
              明明 Node 也可以写服务器，为什么用 Node
              写生产环境下服务器的公司非常少？
            </li>
            <li>
              Electron
              做桌面端程序，打出来的包又大，性能还一般，为什么越来越多公司选择用
              Electron 写桌面端程序？
            </li>
          </ul>
        </div>
        <Title>学习设计模式 + 一门后端语言 (后端同学也可以尝试反过来呢)</Title>
        <div>
          设计模式在业务中用的不多，但实际上是设计良好的程序基础。而对于学习后端语言，这是因为前端代码的抽象程度比较高，写久了容易忘记本质，学习后端语言能体会到更多本质的东西，比如
          <ul>
            <li>
              宏: 学 C/C++ 时老师会教宏
              (Macro)，但不一定会告诉你这是属于元编程的内容，前端玩家也不一定会意识到
              Object.keys 原来是元编程的领域。按这一观点，babel
              实际上充当了元程序的角色。
            </li>
          </ul>
        </div>
      </Fluid>
    </SectionBlock>
  );
};
