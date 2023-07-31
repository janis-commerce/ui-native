# @janiscommerce/ui-native

Library components for Janis Apps

[![Coverage Status](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml/badge.svg)](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fui-native.svg)](https://badge.fury.io/js/%40janiscommerce%2Fui-native)

## 📦 Installation

```sh
npm install @janiscommerce/ui-native
```

---

## Componentes

### Avatar

<p>Componente que muestra imagen del usuario o en su defecto las siglas de su nombre.</p>
</br>

Prop | Valor default | Requerido | Tipo |
-- | -- | -- | -- |
size | sm | false | sm \| md \| lg |
customSize | -  | false | number |
placeholder | -  | true | string |
imageUrl | -  | false | string |
onImgError | -  | false | func |
backgroundColor | white | false | string |
</br>

**Ejemplos de uso:**

```
import {Avatar} from '@janiscommerce/ui-native'

...
<Avatar size="sm" placeholder="Janis" bgColor="#2979FF" />
<Avatar size="md" placeholder="Janis" bgColor="#2979FF" />
<Avatar size="lg" placeholder="Janis User" bgColor="#2979FF" />
<Avatar
   customSize={68}
   placeholder="Janis User"
   bgColor="#2979FF"
   imageUrl="https://www.dzoom.org.es/wp-content/uploads/2020/   portada-foto-perfil-redes-sociales-consejos.jpg"
/>
<Avatar
   customSize={68}
   placeholder="Janis User"
   bgColor="#2979FF"
   imageUrl="https://www.dzoom.org.es/wp-content/uploads/2020/   portada-foto-perfil-redes-sociales-consejos.jpg"
/>
```

![avatar](https://lh3.googleusercontent.com/pw/AIL4fc8Q46M65FQe0h-Mfqu3wLyUftJ2a_PohmP4qfD8zpf9xX2yxYEtTXsa7ml8axY1eeWMg9M_riH92xx782a371pJFa9jubo0MXvxLUgGN0R3OPNxeUr3hASpDiovOD_Mfl6gE0Y_v8Kwvc0eGDpPQt8rVZ7o9uHX8M8SHu_ZsE_-FF7k3glPcEs4_a8o3B_ffPiLizgrPVcVT9jPfyVNPIek2N7trVIMmERl6mC9AmVyEvHCx383woCYYgWw5MdkiDSEmTDKnk2cPIHhLNPlXBKvGkDCB3ch0Hx4arHrKAXUAjEB3H8jYy7wE2e0KF44lOggl31gjHg5icbkIXGGyzNJh-4Rr58U-WEUrJp8b-twaJl5yU3PAzFHWZRKC-_wrBOzZgZLZHe2LGFfpWpTBi4z3q8BiKvPt_yrgOQ7L8BuxLtdIOUz5pAvx2gpvLZZ-buXOVbpepdA4s4AkLdF0EWQrk5-Gzh0HmuxR-x7v09ZvzqzrMznjCRemLxK1xDqLKoHFXq86_D4fqgADG7MQeunpY3mdjSzA9MtCMvoA0EK2ld0uv6YT9_4KhEnnbjkAX_E2jwMyscHrjw3ViJADWF1Cg6XYkzsKmkXZ2MqFzAwDCIKK2-uhmBWRYqn5hPj_bAK14hz3OeZ5hRQikFvNXGYA_-ZA-4BAlULp2I5t8oTO190lW9DZtelBLLC8zUqBjvqsai4wP3IssnZuZXj9oFHKxEekzSPr6az9L6AIE6fyT6QZnFISnE5gh4Y4k0GewJg_44_8xy2UhG2xXKlQr0cmJFF0_ak_bTybTgmLuYD4ue1xo8eyY0YojZ-mQuDRFHgXZpPZ5GKKYvP7g6p2NgCGPN_8L-R2NSHbbRXoveWthUThc76WnieF6Ea6vz8RHxVWDDat7QgNlTyZ_Rpcg=w325-h117-s-no?authuser=0)

### Checkbox

Prop | Valor Default | Requerido | Tipo
-- | -- | -- | --
checked |-| si |boolean
customSize |16 |no |number
checkOnColor |primary.main |no| string
checkOffColor |grey[500]| no |string
iconCheckColor |base.white |no |string
borderRadius |- |no |number
disabled |false |no| boolean
</br>

**Ejemplos de uso:**

```
import {CheckBox} from '@janiscommerce/ui-native';

...
   <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
    <CheckBox />
    <Text>opcion 1</Text>
   </View>
   <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
    <CheckBox checked />
    <Text>opcion 2</Text>
   </View>
   <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
    <CheckBox checked customSize={20} disabled />
    <Text>opcion 3</Text>
   </View>
   <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
    <CheckBox checked customSize={20} borderRadius={10} checkOnColor="#1DB779" />
    <Text>opcion 4</Text>
   </View>
```

![checkbox](https://lh3.googleusercontent.com/pw/AIL4fc_2djGV2DMo1RUgbipQUh5p6rpHx3YV64ZvU2LFzhMcflypnyh3fzEZQu66ITWvwfHH1gThkCpNFI6dqASNMmIDzdWst1y85Pj8Om1VWTEh8kZjz_xDfwbqwDeIThlc8G9TcAbEdqvGMwVQdqLxofFibQuBFjLcf2PsV9w2-NnlpDvHnQcqTEBC4Zr2-X0Zh-_4zb3M_k8fH7s_L43kF46VSRrxYfCTSMAh8a4T79p5aA5Qmzyd3zKFpf2I9zjmptQJDQh7sDLbBRjA2y8rb2H6lWUucMRxdP8ENnB_T63zP-RMlGT2bNylhmVDZqFe2L0YmfGuaMsbLJM1-kAZwQ2-8L3ZleXZ9M6vJw_RySiZz_xehtL5S4U2GSA_P9ELt2q0Tvhsvil4MoBXhLrSetcTWfeMx7xoupkME1CCEaRrsxtpC8T65GCRXPH-wsKKy6d69tz766qQSBX_eAKMXo7cowazzWQGGQ_540Pumyg--dsI9xBOJjuQWgUFuY3sRGqmnP33eTvnVI_L4vMkAPetcdWIhMhm451VWOHNNsKK37Lv3fZkRxxdYYNkLVqHYBjtqmUarjxej9PGe4qZlrpUeiwiPXYqg9pusJ99GjYmoSeMtz3OHzY3mNXmlE4WHdxM73rhX9FTd9_nhFZBuftrmKrq6OAnXh5FmJILEtJR1oEH53pLoNCCWCaigBIK-fJGfeiHSmuP_EAe4KqWUOEr59WmMpqROl6tX_p6yCkop8cEWqQe4XzHGeppONLbcT_4A580OirQ2AMigT8eLT4cza8dQS6wQ_kcOHdVNDv67laTp5-tB8nzx5SmUOCPoql02d7lpWDqZ7tfI8UfIdXPquMCnLqAoq7N_DddiVdRWWS_90oWLSH5uCs4ss0OyuAVB4lhp-ZP1FIy4v4ZCw=w173-h178-s-no?authuser=0)

### Image

Prop | Valor Default | Requerido | Tipo
-- | -- | -- | --
source | - | si | string

* Hereda todas las props de [Image](https://reactnative.dev/docs/image)
  
</br>

**Ejemplos de uso:**

```
import {Image} from '@janiscommerce/ui-native';

...
   <Image
      style={{width: 100, height: 100}}
      source={{
         uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/     portada-foto-perfil-redes-sociales-consejos.jpg',
      }}
   />
```

![image](https://lh3.googleusercontent.com/pw/AIL4fc96HHeuKXoA528krVfZdZ_ERDHQRcpYic_CqqdC4kVm2sjUA8BTE8n2UJ5WRhxNKBUS50CLqVFQjCuvuF845qPCN89hYgrestTzQUr3Savbf9YkvuhRHFCG9UVE999vHeQABesDsSBWVl50oIFodjwcyxbKLmlINtVkxlQV8i8BzGIOCNSCpNaIzqTqqjvlubYC_Cvqv2ah4Ah4NeZFRWpiavYxPvaOB3JJXcsRpR_eV_MTPM6hhTb59t5lCbzs5AUFL9MH77HzIvd-3Io5piEPCASYkDM3MsqhOdZCS11ELmyBDzubam-dozodMRVF_CYFDyzGd5BHiRXEedcot1cxBLmI7WDYXsJyggAoKApFv8I2mXN3-fgvsvaUyuaDrMiEBPEMp-BWCSwK6l0__uh4unu1g0p26Ro-Pq9l-FujyqjoB7EifjuHq-RLu5J6YdJIpo5VetjCcaGp9Ri0b5oDfbGP784FrncaeO1VjNYRE_lxeWtG772bGv9_WRO3nZEiluHPm6RafAbuQxfsshIiipMVRAHU8b7n_FhzxbAIJhIFabuFHkwXPHN_k0QvXhRd7_b0RAcM1enHtraeigmFVJ0gzSpTC0Ea-g0cwhNIztSippXq9eXYEDnmswt6JreiovPpZvz12c07G_EYOJgd7yBV3ZKvM3iIVQp7ffqKhkx-tIpWgRp95hl1IBxvt1a6lnB1IVPrk_yYJcl1h3dy8UzDclGyZ639gS2-Irdh7kAA0BS8YdxZiCMiYEVbZyNB5Hh6tPoJCmodfxO3DaDn94-bKAjHONsZIoyFOI6RWn3dyiybFmM7BjHNh6lfrVciKpS_tadNYFZPY7JrXlW3nIQvHlMxiZ7oyRv_8Q36_7f-MRH55bdaAuPiddi_HtQTX9Hdtx_cNUh2i06Vnw=w180-h170-s-no?authuser=0)

### Svg

Prop | Tipo | Requerido | valor default | Observaciones
-- | -- | -- | -- | --
name | string | si | - |  
width | string | no | - | En caso de que no se pase ningún valor, toma el que tiene por default el svg
height | string | no | - | En caso de que no se pase ningún valor, toma el que tiene por default el svg
size | string | no | - | Esta prop va a impactar en el width y el height.Si hay un size, no tendrá que impactar los valores de width y height
</br>

**Ejemplos de uso:**

```
import {Svg} from '@janiscommerce/ui-native';

...
   <Image
      style={{width: 100, height: 100}}
      source={{
         uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/     portada-foto-perfil-redes-sociales-consejos.jpg',
      }}
   />
```

![svg](https://lh3.googleusercontent.com/pw/AIL4fc8R3EyzuDxXEdxg73obhN-it1H_LyjUOdZ6hlvi6VqufufVMTkoAJ35pJLyZCcEPsEmhPb--zU5Gjg3_-rQ8NfRt-jqr7kuManD5AEUm6MHCEFWqu-UI999gXOI4hpfqcMPi-dSRdSW_hSB_jtj1EgTxs_6HYG6YSnd_64mRreX80YYsavUkBS9NuB_eteU8bgHS53pSjyvMKuqV8ZXvEsMjP35czNEkb2y_2llqDssAYq3UTeEAhf4UXr4hByw4fB2_8O_tnaSNCxi9066IDk8abKA8Wm2uIbAlyNQnnLw-EiqClYgAc2_AQMY_WLGVyWpQ6I8JXeEVFnFBaTR2QSl2b0Te8LPzYFm20IWM1LllLnT_6mg9jCx1p1W5i5XqLxoRRBPIPnYqiOShqXZ3G5D9ISmY1eOMlffzffEPRl_iCv78czh83OGzLl9jbsydNgl9CFn74C57tJ3Vd4EFCOa05IIdD3YAxWUWsgCp9cE8I81nnLCa34c61I_KPGQHuZXTKj08zVhWsvuONTCT_PxDnYQW6chPkkPQY52IasfsrNP2_i7oBlMD-giP6TgzXm1K2kGwyyZ-NbCKzALzhy9IXjbeC_mA51wyb2ZtxJ5rRAMKN57LJmWyriEQTOqWfcdAubW9vcmivgv7qn0Bdt0CHr_SJUXEG14MeMQi-1_ZFF2o2OslQtoNXY2Wz9fCGQWKLth25YWjGweRHfLHZgMKp8MAt8xNz22-W29jXQ8NYe27Xoz156FvvdV1Vc-X__a2N07zf-11dZFfRjhWsLCeo6oiDLIJ7wqKQAlp93mthmPBZhlMndzm0B2y0AmdY6O-Chx6rx-0D5c2Ot0x6m0ns0wKYoeC2Kbhv-XNNxNraV54t9ry1_iVu1ZTWkEXoMjJNOJRXXJYnuioK_b0A=w232-h199-s-no?authuser=0)

### Text

* Hereda todas las props de [Text](https://reactnative.dev/docs/text)
</br>