import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AppsIcon from "@mui/icons-material/Apps";
import DnsIcon from "@mui/icons-material/Dns";
import { Box, styled, Typography } from "@mui/material";
import { Fluid } from "../components/Fluid";
import { SectionBlock } from "../components/Section";
import { IFrame } from "../components/Iframe";
import Del from "../components/Del";

const ApplicationTitle = styled("div")(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(5),
}));

const ApplicationTitleText = styled("div")(({ theme }) => ({
  marginLeft: 1,
}));

const ApplicationContentContainer = styled("div")(({ theme }) => ({
  marginLeft: 50,
}));

export const WebApplication = () => {
  return (
    <SectionBlock sx={{ backgroundColor: "#eee" }}>
      <div>
        <Fluid>
          <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 4 }}>
            开始前，看看前端技术的应用
          </Typography>
        </Fluid>
        <Fluid>
          <ApplicationTitle>
            <LanguageIcon />
            <ApplicationTitleText>网页</ApplicationTitleText>
          </ApplicationTitle>
          <ApplicationContentContainer>
            最经典的应用，比如现在展示的这个网页。网页可以很复杂，如以下是最近
            VSCode 发布的网页版 VSCode。
          </ApplicationContentContainer>
          <IFrame src="https://vscode.dev/"></IFrame>
        </Fluid>
        <Fluid>
          <ApplicationTitle>
            <DesktopWindowsIcon />
            <ApplicationTitleText>
              桌面跨端 (Windows, Linux, Mac)
            </ApplicationTitleText>
          </ApplicationTitle>
          <ApplicationContentContainer>
            如 VS Code, Atom, Motrix 等基于 Electron。
          </ApplicationContentContainer>
        </Fluid>
        <Fluid>
          <ApplicationTitle>
            <PhoneAndroidIcon />
            <ApplicationTitleText>移动跨端 (Android, iOS)</ApplicationTitleText>
          </ApplicationTitle>
          <ApplicationContentContainer>
            非常多移动 App 都有使用 Web
            技术开发的功能，使用者并不感知，体验接近于原生。
          </ApplicationContentContainer>
        </Fluid>
        <Fluid>
          <ApplicationTitle>
            <AppsIcon />
            <ApplicationTitleText>小程序、小游戏</ApplicationTitleText>
          </ApplicationTitle>
          <ApplicationContentContainer>
            本质上是移动跨端范畴。
          </ApplicationContentContainer>
        </Fluid>
        <Fluid>
          <ApplicationTitle>
            <DnsIcon />
            <ApplicationTitleText>中小型服务端</ApplicationTitleText>
          </ApplicationTitle>
          <ApplicationContentContainer>
            虽然部分厂会使用 Web 技术架 Server，但实际上用的不多。听 <Del>houzaj</Del> 说
            Give Me Five 后台是 eggjs 编写的。
          </ApplicationContentContainer>
        </Fluid>
        <Fluid>
          <ApplicationTitle>WebGL</ApplicationTitle>
          <ApplicationContentContainer>
            尽管使用 Web 技术，但更多的归图形学领域。以下是 three.js
            库中的一个例子。
          </ApplicationContentContainer>
          <IFrame src="https://threejs.org/examples/webgl_animation_keyframes.html" />
        </Fluid>
      </div>
    </SectionBlock>
  );
};
