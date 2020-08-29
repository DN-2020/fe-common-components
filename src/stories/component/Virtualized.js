import React, { useState, useEffect } from 'react';
import { List, Avatar, Button, Skeleton, message, Spin, Card, Rate } from 'antd';
import InfiniteScroll from 'react-infinite-scroller'
import reqwest from 'reqwest';
import { ItemSlide } from './ItemSlider';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const Virtual = (props) => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);


  useEffect(
    () => { handlegetData() }, []
  );
  const handlegetData = () => {
    getData(
      async res => {
        await setInitLoading(false);
        await setData(res.results);
        await setList(res.results);
      }
    )
  }
  const getData = async (callback) => {
    await reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };
  const onLoadMore = async () => {
    await setLoading(true);
    await setList(data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))));
    await getData(async res => {
      const data2 = data.concat(res.results);
      await setData(data2);
      await setList(data2);
      await setLoading(false);
    }).then(() => window.dispatchEvent(new Event('resize')));
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}
const { Meta } = Card;
const fakeScrollDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const VirtualScroll = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => { handleFetchData() }, []);
  const handleFetchData = () => {
    fetchData(res => { setData(res.results) })
  }
  const fetchData = async callback => {
    await reqwest({
      url: fakeScrollDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };
  const handleInfiniteOnLoad = () => {
    let handleData = data;
    setLoading(true);
    if (data.length > 50) {
      message.warning('Infinite List loaded all');
      setLoading(false);
      setHasMore(false);
    }
    else {
      fetchData(async res => {
        handleData = data.concat(res.results);
        await setData(handleData);
        await setLoading(false);
      }
      );
    }
  };
  return (
    <div style={{
      border: "1px solid #e8e8e8",
      borderRadius: "4px",
      overflow: "auto",
      padding: "8px 24px",
      height: "1000px"
    }}
      className="demo-infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta

                // title={<a href="https://ant.design">{item.name.last}</a>}
                description={<ItemSlide></ItemSlide>}
              />
            </List.Item>
          )}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export { Virtual, VirtualScroll }