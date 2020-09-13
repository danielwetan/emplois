import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import styles from '../styles/EditProfile';
import image from '../assets/images/profile.jpg';
import uploadImage from '../assets/images/upload.png';
import photoRes from '../assets/images/photo-res.png';
import photoSize from '../assets/images/photo-size.png';
const Profile = () => {
  const [isSelectedMobile, setSelectionMobile] = useState(false);
  const [isSelectedWeb, setSelectionWeb] = useState(false);
  if (isSelectedMobile) {
    setSelectionWeb(false);
  }
  if (isSelectedWeb) {
    setSelectionMobile(false);
  }

  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon
              name="pencil"
              type="font-awesome"
              color="#9EA0A5"
              size={24}
              style={{ marginTop: 5, marginRight: 5 }}
            />
            <Text style={styles.editText}>Edit</Text>
          </View>
          <Text style={styles.name}>Daniel Saputra</Text>
          <Text style={styles.position}>Backend Engineer</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="map-pin" type="feather" color="#9EA0A5" size={20} />
            <Text style={styles.location}>Jakarta, Indonesia</Text>
          </View>
          <Text style={styles.jobType}>Full time</Text>
        </View>

        <View style={styles.thirdContainer}>
          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Simpan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.buttonCancelText}>Batal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fourthContainer}>
          <Text style={styles.title}>Data diri</Text>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.form} placeholder="Masukan alamat email" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Job title</Text>
            <TextInput style={styles.form} placeholder="Masukan job title" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Domisili</Text>
            <TextInput style={styles.form} placeholder="Masukan domisili" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Tempat kerja</Text>
            <TextInput style={styles.form} placeholder="Masukan tempat kerja" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Deskripsi singkat</Text>
            <TextInput
              style={styles.formDescription}
              multiline={true}
              placeholder="Masukan deskripsi singkat"
            />
          </View>
        </View>

        <View style={styles.fifthContainer}>
          <Text style={styles.title}>Skill</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginBottom: 32 }}>
              <TextInput style={styles.formSkill} placeholder="Java" />
            </View>
            <TouchableOpacity style={styles.buttonSkillSave}>
              <Text style={styles.buttonSkillSaveText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sixthContainer}>
          <Text style={styles.title}>Pengalaman kerja</Text>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Posisi</Text>
            <TextInput style={styles.form} placeholder="Software Engineer" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Nama perusahaan</Text>
            <TextInput style={styles.form} placeholder="Arkademy" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Bulan / tahun</Text>
            <TextInput style={styles.form} placeholder="September 2020" />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Deskripsi singkat</Text>
            <TextInput
              style={styles.formDescription}
              multiline={true}
              placeholder="Masukan deskripsi singkat"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonSetting}>
              <Text style={styles.buttonSettingText}>
                Tambah pengalaman kerja
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.seventhContainer}>
          <Text style={styles.title}>Portofolio</Text>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Nama aplikasi</Text>
            <TextInput
              style={styles.form}
              placeholder="Masukan nama aplikasi"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Deskripsi singkat</Text>
            <TextInput
              style={styles.formDescription}
              multiline={true}
              placeholder="Masukan deskripsi singkat"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Link publikasi</Text>
            <TextInput
              style={styles.form}
              placeholder="Masukan link publikasi"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Link repository</Text>
            <TextInput
              style={styles.form}
              placeholder="Masukan link repository"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Tempat kerja terkait</Text>
            <TextInput
              style={styles.form}
              placeholder="Masukan tempat kerja terkait"
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Tipe portofolio</Text>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <CheckBox
                  value={isSelectedMobile}
                  onValueChange={setSelectionMobile}
                />
                <Text style={styles.applicationType}>Aplikasi Mobile</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <CheckBox
                  value={isSelectedWeb}
                  onValueChange={setSelectionWeb}
                />
                <Text style={styles.applicationType}>Aplikasi Web</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.label}>Upload gambar</Text>
            <View style={styles.uploadImageContainer}>
              <Image source={uploadImage} style={{ marginLeft: 120 }} />
              <Text
                style={{
                  marginBottom: 20,
                  marginTop: 25,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 16,
                  color: '#1F2A36',
                }}>
                Upload file penyimpanan
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                  <Image source={photoRes} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 12,
                        color: '#1F2A36',
                      }}>
                      High-Res Image
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 12,
                        color: '#1F2A36',
                      }}>
                      PNG, JPG or GIF
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={photoSize} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 12,
                        color: '#1F2A36',
                      }}>
                      High-Res Image
                    </Text>
                    <Text
                      style={{
                        paddingLeft: 5,
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 12,
                        color: '#1F2A36',
                      }}>
                      1080x1920 / 600x800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonSetting}>
              <Text style={styles.buttonSettingText}>Tambah portofolio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
