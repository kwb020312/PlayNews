import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Container, Content, List } from "native-base";
import { getArticles } from "../../api/news";
import DataItem from "../DataItem";
export default function TabOne() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // 상단에 초기화를 useState 로 초기화 처리가 되어있기 때문에 이건 필요 없음.
    // setIsLoading(true);
    
    async function get_articles() {
      setArticles(await getArticles());
      setIsLoading(false);
    }
    get_articles();
  }, []);

  const pageView = isLoading ? (
    <View>
      <ActivityIndicator animating={isLoading} size="large" color="red" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return <DataItem article={article} />;
      }}
    />
  );

  return (
    <Container>
      <Content>{pageView}</Content>
    </Container>
  );
}
