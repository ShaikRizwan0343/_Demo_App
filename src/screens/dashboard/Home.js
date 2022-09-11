import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../../helpers/ImagePath';
import Header from '../../components/Header';
import {moderateScale, moderateScaleVertical} from '../../theme/StyleConstants';
import Swiper from 'react-native-swiper';
import {bannerImagesData} from '../../utils/staticData/BannerImages';

const Home = () => {
  return (
    <ImageBackground
      source={ImagePath.ic_backgroundImage}
      style={{flex: 1}}
      resizeMode="cover">
      <View>
        <Header title={'Home'} />
        <View style={styles.swiperWrapper}>
          <Swiper
            // autoplay={true}
            style={{
              alignItems: 'center',
            }}
            activeDotColor={'#2F74FA'}
            dotColor={'#fff'}
            pagingEnabled={true}>
            {bannerImagesData.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{
                    uri: item.image_url,
                  }}
                  style={styles.swiperImage}
                  resizeMode={'cover'}
                />
              );
            })}
          </Swiper>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  swiperWrapper: {
    height: moderateScaleVertical(176),
    width: moderateScale(340),
    marginTop: moderateScaleVertical(36),
    borderRadius: moderateScale(12),
    marginHorizontal: moderateScale(4),
    overflow: 'hidden',
    elevation: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  swiperImage: {
    height: moderateScaleVertical(176),
    width: moderateScale(340),
    overflow: 'hidden',
  },
});
