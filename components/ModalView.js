import React from "react";
import { Dimensions, Modal, Share } from "react-native";
// 웹뷰 선언
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from "native-base";

function ModalView({ showModal, onClose, articleData }) {
  // 모달 높이 설정
  const webViewHeight = Dimensions.get("window").height;

  // 공유
  const handleShare = () => {
    const { url, title } = articleData;
    const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: "`Share ${title}`" }
    );
  };

  return (
    // transparent 투명도 옵션으로 해당옵션이 있는경우 뒷배경이 투명해진다.
    <Modal animationType="slide" transparent visible={showModal}>
      <Container
        style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}
      >
        <Header style={{ backgroundColor: "silver" }}>
          <Left>
            <Button onPress={onClose} transparent>
              <Icon name="close" style={{ color: "white", fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Title
              children={articleData.title}
              style={{ color: "white" }}
            ></Title>
          </Body>
          <Right>
            <Button onPress={handleShare} transparent>
              <Icon name="share" style={{ color: "white", fontSize: 30 }} />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView
            containerStyle={{ height: webViewHeight }}
            source={{ uri: articleData.url }}
            style={{ flex: 1 }}
            onError={onClose}
            startInLoadingState
            scalesPageToFit
          />
        </Content>
      </Container>
    </Modal>
  );
}

export default ModalView;
