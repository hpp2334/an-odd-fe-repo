import { Box, Typography, styled, Slider } from "@mui/material";
import React, { useState } from "react";
import { Fluid } from "../components/Fluid";
import { SectionBlock } from "../components/Section";

const Title = styled("div")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

const SubTitle = styled("div")(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.secondary,
}));

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
    label: "极佳",
  },
];

function valueLabelFormat(value: number) {
  return offerSkillLevelMasks.findIndex((mark) => mark.value === value) + 1;
}

export const OfferSkills = () => {
  const [offerSkillLevelValue, setOffetSkillLevelValue] = useState(0);

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
          {offerSkillLevelValue >= 0 && (
            <>
              <Title>计算机基础</Title>
              <div>
                <div>
                  计算机网络: TCP/UDP, 网络模型, HTTP, HTTP/2, HTTPS, ...
                </div>
                <div>操作系统: 线程/进程, ...</div>
                <div>数据结构与算法: 栈, 队列, 二叉树, ...</div>
                <div>...</div>
              </div>
              <Title>基础技术</Title>
              <div>
                <div>HTML5</div>
                <div>CSS</div>
                <div>JavaScript, ES6+</div>
              </div>
            </>
          )}
          {offerSkillLevelValue >= 50 && (
            <>
              <div>
                <Title>流行的 Web 前端框架</Title>{" "}
                <SubTitle>
                  3 选 1即可，如果能掌握 1
                  个的同时了解其他框架的异同会更好，另外目前国内用 Angular 不多
                </SubTitle>
              </div>
              <div>
                <div>React</div>
                <div>Vue</div>
                <div>Angular</div>
              </div>
              <div>
                <Title>Node 技术</Title>{" "}
                <SubTitle>JavaScript 写本地工具、Server</SubTitle>
              </div>
              <div>
                <div>Node</div>
                <div>Node 框架: Express, NestJS</div>
              </div>
            </>
          )}
          {offerSkillLevelValue >= 100 && (
            <>
              <div>
                <Title>前端工程化</Title>
              </div>
              <div>
                <div>流程工具: gulp</div>
                <div>构建工具: Babel, SWC, es-build</div>
                <div>打包工具: Webpack</div>
              </div>
              <div>
                <Title>前端其他</Title>
              </div>
              <div>
                <div>前端安全</div>
                <div>前端性能</div>
              </div>
              <div>
                <Title>其他技术 (兴趣/业务 相关)</Title>
              </div>
              <div>
                <div>跨端技术: React Native, Weex, Flutter</div>
                <div>微信小游戏、小程序</div>
                <div>前端可视化技术</div>
                <div>WebAssembly</div>
                <div>...</div>
              </div>
            </>
          )}
        </Box>
      </Fluid>
    </SectionBlock>
  );
};
