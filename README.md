# @janiscommerce/ui-native

Library components for Janis Apps

[![Coverage Status](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml/badge.svg)](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fui-native.svg)](https://badge.fury.io/js/%40janiscommerce%2Fui-native)

## 📦 Installation

```sh
npm install @janiscommerce/ui-native
```

---

# Componentes

## Avatar

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

## Checkbox