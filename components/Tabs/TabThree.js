import React, { useEffect, useState } from "react";
import { getEntertainment } from "../../api/news";
import { View, Text, ActivityIndicator } from "react-native";
import { Container, Content, List } from "native-base";
import DataItem from "../DataItem";
import ModalView from "../ModalView";

export default function TabThree() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  useEffect(() => {
    const get_data = async () => {
      setArticles(await getEntertainment());
      setIsLoading(false);
    };
    get_data();
  }, []);

  const viewModal = (articleData) => {
    setModalView(true);
    setModalArticleData(articleData);
  };

  const handleModalClose = () => {
    setModalView(false);
    setModalArticleData({});
  };

  const pageView = isLoading ? (
    <View>
      <ActivityIndicator animating={isLoading} size="large" color="red" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return <DataItem article={article} onPress={viewModal} />;
      }}
    />
  );

  return (
    <Container>
      <Content>{pageView}</Content>
      <ModalView
        showModal={modalView}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
}
