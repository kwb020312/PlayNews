import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Container, Content, List } from "native-base";
import DataItem from "../DataItem";
import ModalView from "../ModalView";
import { useSelector, useDispatch } from "react-redux";

export default function TabThree() {
  const [modalView, setModalView] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  const dispatch = useDispatch();
  const { isLoading, articles } = useSelector((state) => {
    return {
      isLoading: state.isLoading,
      articles: state.entertainment,
    };
  });

  useEffect(() => {
    dispatch({ type: "GET_DATAS", category: "entertainment" });
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
