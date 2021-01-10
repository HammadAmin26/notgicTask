import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Container from '../../components/Container';
import ResponsiveText from '../../components/ResponsiveText';
import AppHeader from '../../components/AppHeader';
import {Fonts} from '../../theme/Fonts';
import CheckItem from '../../components/CheckItem';
import Button from '../../components/Button';
import {Colors} from '../../theme/Colors';

const initialRegion = {
  latitude: 31.543577,
  longitude: 74.295128,
};
const destination = {latitude: 31.541236, longitude: 74.318662};

const Orders = () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <AppHeader
          body={
            <View>
              <ResponsiveText style={styles.headerTitle}>
                Track Your Order
              </ResponsiveText>
              <View style={styles.headerTitleShadow} />
            </View>
          }
        />
        <CheckItem title={'Finding Nearby Rider'} />
        <CheckItem title={'Picked Order'} />
        <CheckItem title={'Reaching out to you'} />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker coordinate={initialRegion}>
              <Image
                source={require('../../assets/icons/map-pin.png')}
                style={styles.markerPinIcon}
              />
            </Marker>
            <Marker coordinate={destination}>
              <Image
                source={require('../../assets/icons/map-pin.png')}
                style={styles.markerPinIcon}
              />
            </Marker>
            <Polyline
              coordinates={[initialRegion, destination]}
              strokeColor="#d4302f"
              lineDashPattern={[0]}
              strokeWidth={11}
            />
          </MapView>
        </View>
        <Button containerStyle={styles.cancelButton} text={'Cancel Order'} />
      </ScrollView>
    </Container>
  );
};

export default Orders;

const styles = {
  container: {
    flexGrow: 1,
    paddingHorizontal: wp(6),
    backgroundColor: Colors.gold,
  },
  headerTitle: {
    fontFamily: Fonts.WorkSans.Bold,
    fontSize: 5.5,
    textDecorationLine: 'underline',
  },
  headerTitleShadow: {height: 5, backgroundColor: 'rgba(0,0,0,0.1)'},
  mapContainer: {
    height: wp('80'),
    backgroundColor: 'grey',
    borderRadius: wp('3'),
    marginBottom: wp('5'),
  },
  cancelButton: {
    width: wp('75'),
    alignSelf: 'center',
    height: wp('20'),
    backgroundColor: Colors.red,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  markerPinIcon: {
    height: wp('10'),
    width: wp('10'),
    resizeMode: 'contain',
    tintColor: '#d4302f',
  },
};
