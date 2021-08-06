'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fd47afcdefd102c52a96d322b6939e32",
"assets/assets/images/1-a5515de2-ce5d-4a48-949b-b6868d4926cf.jpg": "f4aceb34c315b31708d9790f082a7a54",
"assets/assets/images/1-s2.0-S1093326314001582-fx1_lrg-7cd31ce8-7d38-49f1-948f-ced635c4d41c.jpg": "93a29e72f0a70ff57de03074ad0cfdae",
"assets/assets/images/11224_2012_72_Fig1_HTML-40e7c6de-a330-4642-ae91-58f82690c447.gif": "1de93786e33094be25036cbb91afb73e",
"assets/assets/images/11224_2012_72_Fig2_HTML-e5c972a9-2db1-4c69-a6c4-29247bea3a6c.gif": "6b502b19b523d466bd59cfc8b45667f3",
"assets/assets/images/11224_2012_72_Sch1_HTML-2266ff3e-3f10-47ee-9a7b-f3fc30f0d7b7.gif": "4fef3b1be97259032dc8e50f8f13b7df",
"assets/assets/images/11224_2012_72_Sch2_HTML-4793919e-bcc9-4545-90e3-ae8d7ce9cb29.gif": "cff25862eb548c33e1726c1918e11db8",
"assets/assets/images/11224_2012_72_Sch3_HTML-97536cd6-8b7d-4dee-acef-ca4e82332058.gif": "961841cba8cbd9a380d2cfa373bab68d",
"assets/assets/images/11224_2012_9993_Fig1_HTML-515bbc13-ee35-4dce-9869-20f660788939.gif": "872e1e0d245e49d6be583796eca1d87c",
"assets/assets/images/11224_2012_9993_Fig2_HTML-707d14b8-653e-4093-bbf1-16c9de225a28.gif": "f541b1fa0d68d06ea5ec2b394e915085",
"assets/assets/images/11224_2012_9993_Fig3_HTML-c4e59787-39b0-4ff0-a7ea-4e774f78f988.gif": "6549f853e8ea22c421415088515a163a",
"assets/assets/images/11224_2012_9993_Fig4_HTML-346f7954-89b6-4b7d-8793-9ef2dcf408c1.gif": "65d5d8bbfc12789e445e3f577acd9cc6",
"assets/assets/images/11224_2012_9993_Fig5_HTML-f758d1a7-7eab-45c8-ab09-274c8f3ee8e2.gif": "5cdb194473e6c93a962a611e45613a38",
"assets/assets/images/11224_2012_9993_Fig6_HTML-bc1fb327-b011-4b9d-a4a0-81477b7b2826.gif": "9d19c5458c3b2cea5e9f02b9ea50b40f",
"assets/assets/images/20170430_111110-d315a9b3-e0bc-44f5-9260-a95a861cc739.jpg": "6c5e576ec1eb03e89e098512c10f5770",
"assets/assets/images/20170502_154136-175991d4-72a5-44ca-877f-8947a9ac45f9.jpg": "e045894678a8cd0ae2dee0773da4da7b",
"assets/assets/images/about-0a876feb-34a5-46ea-98e3-5a58c44dbf42.html": "178c13b0a0f0f067cc4c01e614aae0fc",
"assets/assets/images/aram-ghaempanah-44d8ae68-2288-4b2a-9574-4475c496070f.jpg": "f67506cc5bca515490684ab348f91859",
"assets/assets/images/bentelhoda-nouri.jpgbentelhoda-nouri_14358507192000653457-6c69dda7-0d67-4723-9045-657118581e1a.jpg": "7ce82905836f1dbd0ca5f51c60d273da",
"assets/assets/images/davood-alizadeh.jpgdavood-alizadeh_14358507191672397233-bf6fbf92-b356-413e-bb3e-5ea7343e450d.jpg": "ccb53ece3e0af7915dbece094bbed583",
"assets/assets/images/dr.-mohammadhasan-khodabandeh-8c37d42e-e4b1-4e32-a30d-4649cf1181ca.jpg": "9f3c8037b94803ded5ddb042c0be8c45",
"assets/assets/images/ejic201801297-toc-0001-m-7d260199-e891-4698-96e8-e0737d0a055d.png": "ee2fd21d00f14859a87539cf84e7c141",
"assets/assets/images/ELF-map-of-PH-n-Me-3-n-n-1-3-monomers-and-HXSPH-n-Me-3-n-com-f989918a-4dba-4d30-9254-73c4f3c169f9.jpg": "792932775f3df76de7c50df42669023f",
"assets/assets/images/elham-kaveei.jpgelham-kaveei_14358507191343520009-0de7e6c6-e9bf-4878-81ee-d99205eb60c8.jpg": "f3101f84930b87537bfd7daa3415c372",
"assets/assets/images/elmira-azizi.jpgelmira-azizi_1435850719203992150-e0b2948a-e388-41a0-b8da-20f7c4b7cf03.jpg": "433016351e595b1ed1acf895e8830d78",
"assets/assets/images/erfan-37266f7a-fed3-481f-93b5-f96d12f41376.jpg": "c63b39111e4fe08c87f939299221597d",
"assets/assets/images/ESP-X-F-Cl-Br-I-computed-at-the-MP2-aug-cc-pVDZ-theory-level-874fc4b2-4dad-44ae-b153-8ef0a9bfe9ea.jpg": "5a5e865b1fcc352b8863ac5f6c1f1cba",
"assets/assets/images/figure-fig7_W640-8fda4b6b-db31-45d1-95d5-d01eb9a94bb6.jpg": "792932775f3df76de7c50df42669023f",
"assets/assets/images/Get-2bce8e28-49d6-43b7-a26d-b7a8534d07cc.tmp": "b162af01a4a0dab4dfa94d99793f3a8a",
"assets/assets/images/Get-41550052-737d-400b-b96a-801f30f34ff0.tmp": "b8d21e624fe06cb83bc8dde920059b04",
"assets/assets/images/Get-4d08fc92-6f75-421b-ae76-e2b01ef244a9.tmp": "de0376e0d19e6d03b1b81804e8c9b5ed",
"assets/assets/images/Get-5b358d94-6a7a-480d-8ae0-6379ee73ff57.tmp": "d2574bf8e631941d5b32c6ed0791d599",
"assets/assets/images/Get-5f543073-72b4-4395-960d-e44f5a1192a9.tmp": "8f96482cdd9243696c8d6d7b726751c1",
"assets/assets/images/Get-c13271cc-6c16-471b-8ff5-1df362f997a7.tmp": "599a7abed93e51dd554f91f898ceb22e",
"assets/assets/images/Get-ce6719c1-9f1f-4b99-be6c-b18d72cc6685.tmp": "2eb1df27d6774e9093d35730e4707fcf",
"assets/assets/images/ic-2013-01890t_0005-ad53c8a6-c5b5-4ef4-a65e-515007604bbe.gif": "838ba73e2b0e3790187402c00481b420",
"assets/assets/images/image1-eca129ad-528a-4d62-863d-805a4b295119.jpg": "2af93f11c5286699bf0abf7ed829dece",
"assets/assets/images/image2-283920c7-012f-46e4-b8f3-f8487d2c0cd1.jpg": "bac4098a8e21bf820e39f747d260e841",
"assets/assets/images/image3-0199d793-7ebf-4224-988f-318591dde302.jpg": "54ced6e17e1e345e4c3696273c53bbfa",
"assets/assets/images/image4-a102f66a-bc13-46e4-afde-552655694c73.jpg": "e3e0cbee60ece71e73c9938f0b03ce3c",
"assets/assets/images/image5-0aa9aca8-2c74-45c9-9f04-2d9e261d67ea.jpg": "d06a79a941ce29b401196670c80486e9",
"assets/assets/images/image6-73efc8a2-c05d-4275-9821-3a0c127d2090.jpg": "7b0a27a0ccdb75ae018d04ace1d80ae3",
"assets/assets/images/image7-d4c95fa3-1c3f-4662-864c-99be76fd1ff8.jpg": "ac7ee9933d90d308edc9074a86a06476",
"assets/assets/images/image8-8888e059-35c6-48c2-b17f-e404c54bab27.jpg": "18f4584897ed589bdc5105d9ee1588cf",
"assets/assets/images/image9-2a6de21d-b2dd-4377-bf44-3f1fbc27c20e.jpg": "c463caa328dcb785988a4d612fb425d5",
"assets/assets/images/img_20170430_110531-b3955201-40a1-43bd-9fb1-b31a6c9f0144.jpg": "2cbbe1f8b0f0a4b32b7e5288a1c6deff",
"assets/assets/images/img_20170430_110713-50d023a8-2681-4aa4-9469-8aae149744aa.jpg": "d79f8e3c0ae19fc1be615a47aea9c969",
"assets/assets/images/img_3635-707a1e13-5158-4b12-89f4-6cda40e9d684.jpeg": "6b5b4a1cf8a77b079d813e4f9e67cd61",
"assets/assets/images/img_3635-b75e4b1c-5514-43b3-b086-0d127a30d903.jpeg": "6b5b4a1cf8a77b079d813e4f9e67cd61",
"assets/assets/images/img_3636-3948e634-f928-4b12-8c14-796035dee366.jpeg": "31cb0fba6b9c63efe5133e6dcd1dfdbd",
"assets/assets/images/img_3638-ce2d9afa-a1e3-4caf-88d8-a9919fe4055f.jpeg": "08d1a52a8e16de26b97110f9b8f3021a",
"assets/assets/images/img_3639-42225bf2-63ca-46ee-a888-b130da497deb.jpeg": "f2fd8222932456a00be540e36ab2561e",
"assets/assets/images/img_3640-41b5e5ff-9ada-4519-a156-9f906fd36366.jpeg": "1c1feffc48115121d50f767787c3494c",
"assets/assets/images/img_7028-84a9d116-c355-46dc-abc4-bd9fbf45ea7d.jpeg": "c907e41ee47467d590c563ec48c68bb0",
"assets/assets/images/img_7583-40fa491a-276f-4ac3-82c9-7c3ddef29798.jpeg": "326c025f2cd22b8764eca128727d77c1",
"assets/assets/images/img_7997-4121c543-9532-460d-9cb5-43591df65d9b.jpeg": "a97fa2e41e298c1f4e25b5dd62d74946",
"assets/assets/images/jp-2010-00423b_0005-76e70054-4103-4abc-a616-b3b57d903e00.gif": "d6d1338bff37972cece78decb6e4e418",
"assets/assets/images/jp-2011-080226_0006-0c8a3d5f-11ae-4bfc-8668-4a2e9f7be061.gif": "c0a7a33ff6248bdb68542827070ea639",
"assets/assets/images/jp-2012-106474_0006-906b3a72-3ce1-44cb-9fdb-885a55efb7c0.gif": "cde494605788563703a785b028f9cdb4",
"assets/assets/images/jp-2014-06277n_0008-3a6f4bc1-83ad-4a3a-8acc-f05267c87488.gif": "6ebbe73b7f275841af8b0e41bd92f2ef",
"assets/assets/images/jp-2014-12020q_0006-b61f9590-9829-4ec8-a3ed-373bbd84f5f2.gif": "a17d0ce7bc324f008f7b6cf2438037d5",
"assets/assets/images/jp-2015-03151b_0003-cd7f2007-e492-40ca-ae19-967c7453f5ab.gif": "4b008354b869d1c70cc15d059443545b",
"assets/assets/images/jp-2015-071198_0010-116e71d3-f7f0-4635-93e1-a16804c8c1f6.gif": "7d8687213fa925125b439f4eb0573e85",
"assets/assets/images/jp-2016-12069h_0005-9210c359-533a-444e-ab40-69d1d6909330.gif": "348ac4ac6a5de4b1ec16b627b20cf43f",
"assets/assets/images/jp-2018-12045u_0011-1280c67c-ee34-4b32-a178-5cb42b4c6fee.gif": "3b27ed96ffe6d4177686e96320078372",
"assets/assets/images/jp0c00979_0007-8d2112c8-272b-4382-afd4-c73a7351ef79.gif": "5d5b4107046e675763c125fbe5ac9709",
"assets/assets/images/jp1c02319_0008-4d40ce26-b29a-47ec-9479-f66aee2156da.gif": "c89b1217c03a892bbc55dce44f708a1b",
"assets/assets/images/jpccck.2021.125.issue-22.largecover-68684365-b7bb-44e0-82fb-d2cdd64d2255.jpg": "7cc8f2931a3d48c1afbcb45a167106e4",
"assets/assets/images/jz-2016-00891d_0006-55a681e3-1942-4898-ad7e-269b22324aa7.gif": "0ca848d2f435250a07402826eaeac4cb",
"assets/assets/images/jz-2019-00539y_0001-f6f9b486-08a6-4730-b277-40a568d8e5ce.gif": "6b981e4b414e1fbc0ad20fc88fbe5868",
"assets/assets/images/jz-2019-00539y_0002-ab30de4e-cc42-4078-bb7b-45fc51a81c28.gif": "49035965512b5e67b9dff31044ed6802",
"assets/assets/images/mahsa-mazidi.jpgmahsa-mazidi_1435850719548502844-74a62499-78b8-4d7e-8e26-4369401a6a59.jpg": "1cf39d00647b4b1c60bccfedf90ad3a8",
"assets/assets/images/maryam-fakhraei-far.jpgmaryam-fakhraei-far_14358507191541596-51daacfd-9c0c-4974-a202-1e4b444c3bb2.jpg": "1867531c2b7c7cb687ee601e3653fe8d",
"assets/assets/images/mohammadhassan-jabalameli.jpgmohammadhassan-jabalameli_14358-fd9416c2-3454-485d-8df4-7117b047984d.jpg": "055d5ac088e01685d690e77c4c7901a8",
"assets/assets/images/mohammadtaghi-maghsoudi-19f4034a-0c28-4c6f-8ef4-1ba42b12fa50.jpg": "4d1447334a81e0d7b2b3ba175f099a84",
"assets/assets/images/mozhdeh-mohammadpour-696d29b3-f1ba-426d-94b3-c2a225c75e10.jpg": "0c3bdbb428f4a779b366e35ada8218ef",
"assets/assets/images/narges-asadi-aghbolaghi-c6b5bd3d-fe5a-4037-a865-aa2e2d33ed83.jpg": "0286c1018a934bcf0ea605c59895af6d",
"assets/assets/images/parham-773aac88-e5af-4012-adeb-5cb73db691aa.jpg": "e67ce440b4b418ae1fae7e612ed71eb6",
"assets/assets/images/profile.jpeg": "966813d33937b574cc18d1d8b57a0f5f",
"assets/assets/images/Relationship-between-2-r-BCP-and-SP-internuclear-distances-i-07295bdc-9e91-4caa-8354-4d548dc3c27c.jpg": "96d4e3dbc73ae5f3fa71a4beaa88baa0",
"assets/assets/images/Relationship-between-SP-distance-A-and-the-V-c-G-c-parameter-6e1769bc-9bff-470c-b68c-c80e185c8296.jpg": "c5090db0f5834efd0430cd3f621f348d",
"assets/assets/images/S0022113913001887-5098acfc-f197-42fc-99a7-c010f6b4f523.tmp": "37133483222558828c6cdf3ba044d58e",
"assets/assets/images/S0166128004005160-25bb8baa-94d9-4264-a9c0-96b727e53f17.tmp": "12a580993260bd25569427eaf0c3687b",
"assets/assets/images/sahar-ashtari.jpgsahar-ashtari_1435850780863205023-de4ae126-d360-4cef-884e-a761f0fd4b18.jpg": "522e10b0a709474ea91cade4b347ad64",
"assets/assets/images/sara-yasrebi-1af0ba8c-b3e7-4d5b-ac7e-c20b0719a719.jpg": "200c09f2a508cdf4cf42854b018319bd",
"assets/assets/images/Schematic-representation-of-HSXPhosphines-YB-complexes_W640-f31fc680-5c43-4ca6-9aeb-4882f538579f.jpg": "9f95f0b5947d3a8fac0c4dea7b54c27e",
"assets/assets/images/Selected-QTAIM-parameters-in-au-for-HXSPH-n-Me-3-n-YB-comple-a3f4be59-be77-4142-b489-316d0e3d9a10.jpg": "c77d61a48ca8750db1e29e4b3423b3e4",
"assets/assets/images/sohrab-sadeghizadeh.jpgsohrab-sadeghizadeh_14358507803809962-07f6ccb8-b220-4f94-8946-97cee84fc8d6.jpg": "aba08ce8191e52ac04285779bfac5fd3",
"assets/assets/images/zahra-tehrani.jpgzahra-tehrani_1435850780754146111-bc95963c-968e-4418-af18-2bd4c76cf901.jpg": "55bc81ad8d5eae58775079ba6e1cb816",
"assets/FontManifest.json": "4f5c6372e52ed085732d81b206cfd9ac",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1-a5515de2-ce5d-4a48-949b-b6868d4926cf.jpg": "f4aceb34c315b31708d9790f082a7a54",
"assets/images/1-s2.0-S1093326314001582-fx1_lrg-7cd31ce8-7d38-49f1-948f-ced635c4d41c.jpg": "93a29e72f0a70ff57de03074ad0cfdae",
"assets/images/11224_2012_72_Fig1_HTML-40e7c6de-a330-4642-ae91-58f82690c447.gif": "1de93786e33094be25036cbb91afb73e",
"assets/images/11224_2012_72_Fig2_HTML-e5c972a9-2db1-4c69-a6c4-29247bea3a6c.gif": "6b502b19b523d466bd59cfc8b45667f3",
"assets/images/11224_2012_72_Sch1_HTML-2266ff3e-3f10-47ee-9a7b-f3fc30f0d7b7.gif": "4fef3b1be97259032dc8e50f8f13b7df",
"assets/images/11224_2012_72_Sch2_HTML-4793919e-bcc9-4545-90e3-ae8d7ce9cb29.gif": "cff25862eb548c33e1726c1918e11db8",
"assets/images/11224_2012_72_Sch3_HTML-97536cd6-8b7d-4dee-acef-ca4e82332058.gif": "961841cba8cbd9a380d2cfa373bab68d",
"assets/images/11224_2012_9993_Fig1_HTML-515bbc13-ee35-4dce-9869-20f660788939.gif": "872e1e0d245e49d6be583796eca1d87c",
"assets/images/11224_2012_9993_Fig2_HTML-707d14b8-653e-4093-bbf1-16c9de225a28.gif": "f541b1fa0d68d06ea5ec2b394e915085",
"assets/images/11224_2012_9993_Fig3_HTML-c4e59787-39b0-4ff0-a7ea-4e774f78f988.gif": "6549f853e8ea22c421415088515a163a",
"assets/images/11224_2012_9993_Fig4_HTML-346f7954-89b6-4b7d-8793-9ef2dcf408c1.gif": "65d5d8bbfc12789e445e3f577acd9cc6",
"assets/images/11224_2012_9993_Fig5_HTML-f758d1a7-7eab-45c8-ab09-274c8f3ee8e2.gif": "5cdb194473e6c93a962a611e45613a38",
"assets/images/11224_2012_9993_Fig6_HTML-bc1fb327-b011-4b9d-a4a0-81477b7b2826.gif": "9d19c5458c3b2cea5e9f02b9ea50b40f",
"assets/images/20170430_111110-d315a9b3-e0bc-44f5-9260-a95a861cc739.jpg": "6c5e576ec1eb03e89e098512c10f5770",
"assets/images/20170502_154136-175991d4-72a5-44ca-877f-8947a9ac45f9.jpg": "e045894678a8cd0ae2dee0773da4da7b",
"assets/images/about-0a876feb-34a5-46ea-98e3-5a58c44dbf42.html": "178c13b0a0f0f067cc4c01e614aae0fc",
"assets/images/aram-ghaempanah-44d8ae68-2288-4b2a-9574-4475c496070f.jpg": "f67506cc5bca515490684ab348f91859",
"assets/images/bentelhoda-nouri.jpgbentelhoda-nouri_14358507192000653457-6c69dda7-0d67-4723-9045-657118581e1a.jpg": "7ce82905836f1dbd0ca5f51c60d273da",
"assets/images/davood-alizadeh.jpgdavood-alizadeh_14358507191672397233-bf6fbf92-b356-413e-bb3e-5ea7343e450d.jpg": "ccb53ece3e0af7915dbece094bbed583",
"assets/images/dr.-mohammadhasan-khodabandeh-8c37d42e-e4b1-4e32-a30d-4649cf1181ca.jpg": "9f3c8037b94803ded5ddb042c0be8c45",
"assets/images/ejic201801297-toc-0001-m-7d260199-e891-4698-96e8-e0737d0a055d.png": "ee2fd21d00f14859a87539cf84e7c141",
"assets/images/ELF-map-of-PH-n-Me-3-n-n-1-3-monomers-and-HXSPH-n-Me-3-n-com-f989918a-4dba-4d30-9254-73c4f3c169f9.jpg": "792932775f3df76de7c50df42669023f",
"assets/images/elham-kaveei.jpgelham-kaveei_14358507191343520009-0de7e6c6-e9bf-4878-81ee-d99205eb60c8.jpg": "f3101f84930b87537bfd7daa3415c372",
"assets/images/elmira-azizi.jpgelmira-azizi_1435850719203992150-e0b2948a-e388-41a0-b8da-20f7c4b7cf03.jpg": "433016351e595b1ed1acf895e8830d78",
"assets/images/erfan-37266f7a-fed3-481f-93b5-f96d12f41376.jpg": "c63b39111e4fe08c87f939299221597d",
"assets/images/ESP-X-F-Cl-Br-I-computed-at-the-MP2-aug-cc-pVDZ-theory-level-874fc4b2-4dad-44ae-b153-8ef0a9bfe9ea.jpg": "5a5e865b1fcc352b8863ac5f6c1f1cba",
"assets/images/figure-fig7_W640-8fda4b6b-db31-45d1-95d5-d01eb9a94bb6.jpg": "792932775f3df76de7c50df42669023f",
"assets/images/Get-2bce8e28-49d6-43b7-a26d-b7a8534d07cc.tmp": "b162af01a4a0dab4dfa94d99793f3a8a",
"assets/images/Get-41550052-737d-400b-b96a-801f30f34ff0.tmp": "b8d21e624fe06cb83bc8dde920059b04",
"assets/images/Get-4d08fc92-6f75-421b-ae76-e2b01ef244a9.tmp": "de0376e0d19e6d03b1b81804e8c9b5ed",
"assets/images/Get-5b358d94-6a7a-480d-8ae0-6379ee73ff57.tmp": "d2574bf8e631941d5b32c6ed0791d599",
"assets/images/Get-5f543073-72b4-4395-960d-e44f5a1192a9.tmp": "8f96482cdd9243696c8d6d7b726751c1",
"assets/images/Get-c13271cc-6c16-471b-8ff5-1df362f997a7.tmp": "599a7abed93e51dd554f91f898ceb22e",
"assets/images/Get-ce6719c1-9f1f-4b99-be6c-b18d72cc6685.tmp": "2eb1df27d6774e9093d35730e4707fcf",
"assets/images/ic-2013-01890t_0005-ad53c8a6-c5b5-4ef4-a65e-515007604bbe.gif": "838ba73e2b0e3790187402c00481b420",
"assets/images/image1-eca129ad-528a-4d62-863d-805a4b295119.jpg": "2af93f11c5286699bf0abf7ed829dece",
"assets/images/image2-283920c7-012f-46e4-b8f3-f8487d2c0cd1.jpg": "bac4098a8e21bf820e39f747d260e841",
"assets/images/image3-0199d793-7ebf-4224-988f-318591dde302.jpg": "54ced6e17e1e345e4c3696273c53bbfa",
"assets/images/image4-a102f66a-bc13-46e4-afde-552655694c73.jpg": "e3e0cbee60ece71e73c9938f0b03ce3c",
"assets/images/image5-0aa9aca8-2c74-45c9-9f04-2d9e261d67ea.jpg": "d06a79a941ce29b401196670c80486e9",
"assets/images/image6-73efc8a2-c05d-4275-9821-3a0c127d2090.jpg": "7b0a27a0ccdb75ae018d04ace1d80ae3",
"assets/images/image7-d4c95fa3-1c3f-4662-864c-99be76fd1ff8.jpg": "ac7ee9933d90d308edc9074a86a06476",
"assets/images/image8-8888e059-35c6-48c2-b17f-e404c54bab27.jpg": "18f4584897ed589bdc5105d9ee1588cf",
"assets/images/image9-2a6de21d-b2dd-4377-bf44-3f1fbc27c20e.jpg": "c463caa328dcb785988a4d612fb425d5",
"assets/images/img_20170430_110531-b3955201-40a1-43bd-9fb1-b31a6c9f0144.jpg": "2cbbe1f8b0f0a4b32b7e5288a1c6deff",
"assets/images/img_20170430_110713-50d023a8-2681-4aa4-9469-8aae149744aa.jpg": "d79f8e3c0ae19fc1be615a47aea9c969",
"assets/images/img_3635-707a1e13-5158-4b12-89f4-6cda40e9d684.jpeg": "6b5b4a1cf8a77b079d813e4f9e67cd61",
"assets/images/img_3635-b75e4b1c-5514-43b3-b086-0d127a30d903.jpeg": "6b5b4a1cf8a77b079d813e4f9e67cd61",
"assets/images/img_3636-3948e634-f928-4b12-8c14-796035dee366.jpeg": "31cb0fba6b9c63efe5133e6dcd1dfdbd",
"assets/images/img_3638-ce2d9afa-a1e3-4caf-88d8-a9919fe4055f.jpeg": "08d1a52a8e16de26b97110f9b8f3021a",
"assets/images/img_3639-42225bf2-63ca-46ee-a888-b130da497deb.jpeg": "f2fd8222932456a00be540e36ab2561e",
"assets/images/img_3640-41b5e5ff-9ada-4519-a156-9f906fd36366.jpeg": "1c1feffc48115121d50f767787c3494c",
"assets/images/img_7028-84a9d116-c355-46dc-abc4-bd9fbf45ea7d.jpeg": "c907e41ee47467d590c563ec48c68bb0",
"assets/images/img_7583-40fa491a-276f-4ac3-82c9-7c3ddef29798.jpeg": "326c025f2cd22b8764eca128727d77c1",
"assets/images/img_7997-4121c543-9532-460d-9cb5-43591df65d9b.jpeg": "a97fa2e41e298c1f4e25b5dd62d74946",
"assets/images/jp-2010-00423b_0005-76e70054-4103-4abc-a616-b3b57d903e00.gif": "d6d1338bff37972cece78decb6e4e418",
"assets/images/jp-2011-080226_0006-0c8a3d5f-11ae-4bfc-8668-4a2e9f7be061.gif": "c0a7a33ff6248bdb68542827070ea639",
"assets/images/jp-2012-106474_0006-906b3a72-3ce1-44cb-9fdb-885a55efb7c0.gif": "cde494605788563703a785b028f9cdb4",
"assets/images/jp-2014-06277n_0008-3a6f4bc1-83ad-4a3a-8acc-f05267c87488.gif": "6ebbe73b7f275841af8b0e41bd92f2ef",
"assets/images/jp-2014-12020q_0006-b61f9590-9829-4ec8-a3ed-373bbd84f5f2.gif": "a17d0ce7bc324f008f7b6cf2438037d5",
"assets/images/jp-2015-03151b_0003-cd7f2007-e492-40ca-ae19-967c7453f5ab.gif": "4b008354b869d1c70cc15d059443545b",
"assets/images/jp-2015-071198_0010-116e71d3-f7f0-4635-93e1-a16804c8c1f6.gif": "7d8687213fa925125b439f4eb0573e85",
"assets/images/jp-2016-12069h_0005-9210c359-533a-444e-ab40-69d1d6909330.gif": "348ac4ac6a5de4b1ec16b627b20cf43f",
"assets/images/jp-2018-12045u_0011-1280c67c-ee34-4b32-a178-5cb42b4c6fee.gif": "3b27ed96ffe6d4177686e96320078372",
"assets/images/jp0c00979_0007-8d2112c8-272b-4382-afd4-c73a7351ef79.gif": "5d5b4107046e675763c125fbe5ac9709",
"assets/images/jp1c02319_0008-4d40ce26-b29a-47ec-9479-f66aee2156da.gif": "c89b1217c03a892bbc55dce44f708a1b",
"assets/images/jpccck.2021.125.issue-22.largecover-68684365-b7bb-44e0-82fb-d2cdd64d2255.jpg": "7cc8f2931a3d48c1afbcb45a167106e4",
"assets/images/jz-2016-00891d_0006-55a681e3-1942-4898-ad7e-269b22324aa7.gif": "0ca848d2f435250a07402826eaeac4cb",
"assets/images/jz-2019-00539y_0001-f6f9b486-08a6-4730-b277-40a568d8e5ce.gif": "6b981e4b414e1fbc0ad20fc88fbe5868",
"assets/images/jz-2019-00539y_0002-ab30de4e-cc42-4078-bb7b-45fc51a81c28.gif": "49035965512b5e67b9dff31044ed6802",
"assets/images/mahsa-mazidi.jpgmahsa-mazidi_1435850719548502844-74a62499-78b8-4d7e-8e26-4369401a6a59.jpg": "1cf39d00647b4b1c60bccfedf90ad3a8",
"assets/images/maryam-fakhraei-far.jpgmaryam-fakhraei-far_14358507191541596-51daacfd-9c0c-4974-a202-1e4b444c3bb2.jpg": "1867531c2b7c7cb687ee601e3653fe8d",
"assets/images/mohammadhassan-jabalameli.jpgmohammadhassan-jabalameli_14358-fd9416c2-3454-485d-8df4-7117b047984d.jpg": "055d5ac088e01685d690e77c4c7901a8",
"assets/images/mohammadtaghi-maghsoudi-19f4034a-0c28-4c6f-8ef4-1ba42b12fa50.jpg": "4d1447334a81e0d7b2b3ba175f099a84",
"assets/images/mozhdeh-mohammadpour-696d29b3-f1ba-426d-94b3-c2a225c75e10.jpg": "0c3bdbb428f4a779b366e35ada8218ef",
"assets/images/narges-asadi-aghbolaghi-c6b5bd3d-fe5a-4037-a865-aa2e2d33ed83.jpg": "0286c1018a934bcf0ea605c59895af6d",
"assets/images/parham-773aac88-e5af-4012-adeb-5cb73db691aa.jpg": "e67ce440b4b418ae1fae7e612ed71eb6",
"assets/images/profile.jpeg": "966813d33937b574cc18d1d8b57a0f5f",
"assets/images/Relationship-between-2-r-BCP-and-SP-internuclear-distances-i-07295bdc-9e91-4caa-8354-4d548dc3c27c.jpg": "96d4e3dbc73ae5f3fa71a4beaa88baa0",
"assets/images/Relationship-between-SP-distance-A-and-the-V-c-G-c-parameter-6e1769bc-9bff-470c-b68c-c80e185c8296.jpg": "c5090db0f5834efd0430cd3f621f348d",
"assets/images/S0022113913001887-5098acfc-f197-42fc-99a7-c010f6b4f523.tmp": "37133483222558828c6cdf3ba044d58e",
"assets/images/S0166128004005160-25bb8baa-94d9-4264-a9c0-96b727e53f17.tmp": "12a580993260bd25569427eaf0c3687b",
"assets/images/sahar-ashtari.jpgsahar-ashtari_1435850780863205023-de4ae126-d360-4cef-884e-a761f0fd4b18.jpg": "522e10b0a709474ea91cade4b347ad64",
"assets/images/sara-yasrebi-1af0ba8c-b3e7-4d5b-ac7e-c20b0719a719.jpg": "200c09f2a508cdf4cf42854b018319bd",
"assets/images/Schematic-representation-of-HSXPhosphines-YB-complexes_W640-f31fc680-5c43-4ca6-9aeb-4882f538579f.jpg": "9f95f0b5947d3a8fac0c4dea7b54c27e",
"assets/images/Selected-QTAIM-parameters-in-au-for-HXSPH-n-Me-3-n-YB-comple-a3f4be59-be77-4142-b489-316d0e3d9a10.jpg": "c77d61a48ca8750db1e29e4b3423b3e4",
"assets/images/sohrab-sadeghizadeh.jpgsohrab-sadeghizadeh_14358507803809962-07f6ccb8-b220-4f94-8946-97cee84fc8d6.jpg": "aba08ce8191e52ac04285779bfac5fd3",
"assets/images/zahra-tehrani.jpgzahra-tehrani_1435850780754146111-bc95963c-968e-4418-af18-2bd4c76cf901.jpg": "55bc81ad8d5eae58775079ba6e1cb816",
"assets/NOTICES": "5d3d1f2b225256c151e3f396f6440fa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "71f8ce38c364469dab4298b1a4408afe",
"/": "71f8ce38c364469dab4298b1a4408afe",
"main.dart.js": "9eea4314bddd454e063d275ee3aaf597",
"manifest.json": "2f02d1f321d3fd11924dc749f31c539c",
"version.json": "ebb4cd16a4c6e862a46e05da8d29103d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
