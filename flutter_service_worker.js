'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bcdcaddf3273c81e9fde6903358dd79d",
".git/config": "6a28fabc12ff99d49bc175d8e1834c22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee4022e0cd06470713830310e956d253",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f6897314ac782526432ce423d7610fe",
".git/logs/refs/heads/master": "0f6897314ac782526432ce423d7610fe",
".git/logs/refs/remotes/origin/master": "080125cf859409db59891b577b254c1b",
".git/objects/03/8692f3d4b921e89a9dd1c80102220b84a34c33": "d02837182386d566747fec9e31fb5bd4",
".git/objects/05/6599e24d8b03d8335a0a54ab4e2d61fe658b12": "494ee6171fd7c7931b87e02cd0978728",
".git/objects/05/70688bb96ad2cd3c5ec7cd7b0b4b76aa95d895": "e45aa2094db8e982b4f150075d082a5d",
".git/objects/06/e5bf1989148f847131f3662c44f3f09edf94ce": "9d44d3a3c8a3a4579a48f17fd4a8f645",
".git/objects/07/426b6e8437d2493a9b569d2fcb8a916c5235f2": "ae2a05cfe06feec1f58f274e0f2a3e63",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0b/d0138d9161706df73e91b86885df5dae7851dd": "43a46113fb975024ad705c1a37286781",
".git/objects/0c/4273d7ca1539cfb8e0a6ba163fb2f22f042915": "55dc0064fe3d3d0d29f92c4cfb8a9675",
".git/objects/10/06159dc0434eaa28d3885d90d9b6d965bea18f": "d29e54b086bc19c6d39f5427a2b8a472",
".git/objects/11/42f537ee36b34b5847fffd07601c0cce9d9e0b": "5812f4d67f0094980f06599efc724880",
".git/objects/12/79a6ccd0527d2c1ee57dbb97868eba5f03a4fb": "8078c6572de5c284822dc36fdd2b0aad",
".git/objects/12/89120ac2a27178b385a3e0240e421d736b18ef": "52be866c8e02260dde325ce2f8a90ba6",
".git/objects/12/984bc06f503ddcc899a2acc439cb0e2db41edb": "e9cb73a0e82b4139bf19a0378de0492f",
".git/objects/15/c645c1132e0a1f7b3e4e0b76f388e68a66789f": "1cbc5d676cd63373878a33e64b447501",
".git/objects/19/52c10541ad9bf3d550e6c4347140cbde7be3d9": "2f7bf661413cc8ccf1da0bcd604af699",
".git/objects/1b/13bef67cded47438c934d4ea7bfb5738f9108d": "8f3e911f08cff750ae3427527e96c226",
".git/objects/1c/0ad553f8f337b5641c3f5604fd3e35fca443f1": "c3b59a24b723ec48083c3968853c0c60",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1e/291a42cc14f54a27651c239d4ffa9a12114d6c": "866cf0108bfa7c42d1053cd826e42460",
".git/objects/1e/4171e95732954fc881b739b0f43e9af3b2da90": "86e5f621094661c519bea3a43a030e73",
".git/objects/1e/aab5159e7f378e05f74fed1275aa42d544829a": "e7a489d1b8047b2c464ac6c137443494",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/f08b50613bdd593b4360c14220d8b9774adc1a": "90c4bc7671a58125b1ae0cd35c31c244",
".git/objects/26/2acb8069ae679b4d1fa9a86451407fe151d3a6": "353462a888ffdd56743d58db0395aee2",
".git/objects/26/7904e6315cae700eb19d85e7d38df728c3cc58": "50aeef012aaa029617d93ecdc27d3c9a",
".git/objects/27/1d070c95a52c14c074236ab346e46fc7667e24": "5c857b4823e463b87fa14e4047973e4c",
".git/objects/29/5fbc3ae6ed340d807302b75cdde11dc0199a09": "65fcfefa2de0aede04bf252da4ae5f50",
".git/objects/2a/b1288f79277891fd601135d3f317e2aceb14af": "35011e694a34e45cc8bdccf65cccc7fd",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2c/f381e0cc2c207ea438cf639650ebc21a28058f": "2234aa2ebbdb4147bce760af8214e454",
".git/objects/31/f1dc8ac5f5e10ee85e52f6d9806b5f71a9283a": "11032ced008402c54e6a6dc04dab20a8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/37/7dfbd4425a2562a248a4aa761120be3a376e3c": "90b05ef674f44600f15fb60b89e76f93",
".git/objects/39/7e72c194c8116cbd7a9389f6f7611da98e4344": "85aaa0e23844d1a16c4da420d1824393",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/40/73f688cf5925147859ed6d630fa9c5b4ac59dc": "d18323bfd9a96f96431389977640ffb6",
".git/objects/40/fa62b25e88462339d2cd301362a827f362d6d4": "ef145d48625385b66766a2d4ca1368d0",
".git/objects/46/6fad273df7f55527e19f8c6c32b3e79066053a": "1940f01faaf4c2614c48324fb475c710",
".git/objects/49/50ba748814fa0a37d732abdc62978f4004e225": "ce09f9db81bc94ed715b2e1cd28bf797",
".git/objects/4b/d0af97e55cebe6f698f34328694cabe717e05a": "de13e0647f687819de597a1f4a2cceca",
".git/objects/4d/839f12c6d65272d64a959da210298bcc964f3f": "842eba9d417a0f9d55efd49791be503a",
".git/objects/50/20efc3c5199d2a0a554e2ac2235c2e7c861eac": "d018d1d25443bd0d3797befd8a1c4b05",
".git/objects/52/2dc3105c81c753c96ba7b0b0024c42301dee6f": "a9fa8f430f523f3f98fd2f2aced148cb",
".git/objects/53/4a7ae2242248359af5ef61db3b9c472474cdba": "a5cd2628fd831b3a244cad77079f892d",
".git/objects/54/a733e29a67892325c8737946ca1c4c5dcdde45": "2ff0530a240c21becd167e9b6f120a95",
".git/objects/56/be23641026d2ec10bc7dd8b28ab08455483dcc": "713c753497f83e5f96bb9e40181a9d27",
".git/objects/58/b941304419fbd55e22bda1bc8792cca6f17bec": "6bd28a5b11904ecd03a8933d5071c6eb",
".git/objects/5b/59adcd3999e278a44dc33363e1bb00317bbb18": "90dad9be30a9bb5449e33a701754aec3",
".git/objects/5b/979039ab28aaae305074541fe39258753ba624": "d8d203e90bc2970b708c118fe10ca044",
".git/objects/61/907f0d8c82b52fe1c333a92be45a017322cca9": "284b7b40f3e287590df1e6dbc1c78447",
".git/objects/63/95cbffa3177858eee149e6dd742f0f2ed8c01d": "d375b813950bbf2a30d276bbb238bc70",
".git/objects/64/37983f9510af1ab9e0172412f58fb8da5224e7": "62e3657f51d45f67a5fe3f36482ef429",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6a/13faf393cf9c65eb813ee367a93c3b2a48936e": "718b6b26bae45dfed4fa20e43181ecf4",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/206ffc7b2fc952fdd07c5920ece7f0fa4e93a9": "0611dfcc549b5a9242aaa0e87920ff5d",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/a0bdbab2dd589009beb2b62b9c4de2baceb123": "d97731517c5e06b3551dacb8e163b0e2",
".git/objects/71/f5e03ae5b7336c020e58ffa9bc4f5937dd06e5": "82728464c31c624a23b99b1e827931f5",
".git/objects/78/23d6f8160c97efb948ea9f4bce93027f388eff": "fd582c23074100b80c3b81e2d1ef151e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/11376486d7ed6dbfdd5b0e042284b58b64bd95": "0671a31b0ee6a39c7f7c77729810e5f2",
".git/objects/7e/b6c69f7c9d81648aa5773b09e5e28ff85061a4": "a7ec11ea3a05ed32f7871e3ba0f6df2c",
".git/objects/7e/c4ec11c0720d08b588e4cc2221f0a2abb5d166": "81f43fe7ec569db1a01f28ea7cf55560",
".git/objects/7f/21189b26ee1fd79dcc03d8a9ca77ad2418b676": "9817493651e1fdbe8ab912a0d0fc7a69",
".git/objects/80/369859e25433e98fc3dc469a26e3cebbb77350": "4e249a079213e22ea69e84e46e73904d",
".git/objects/81/c0c27e7495eeb86239a2fdcb3f6097e3db9a6a": "9f4ed69919435def92ed96988f478ccc",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/7582101ccd2e81b0d0e66a54faa4031b2fb3da": "4c4d1043ad0d3d77be720d9a45e65389",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4b7a2e1124cdb03c8837521daef9cd563ad9fc": "a0bd6bf8d5b6850e42916f929c683a1c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/c339846e2305c524fc5736224de0829d8aec4d": "66c2decc4c1dc833c49a9d5d98b7729d",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/8a2a6cc76a4d7cb692d0d08e352f126ec48a9d": "cbf73b51fb0502e860178e210c363ca7",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/9a/a0e099bd680a5f3a27322b4217f042f75b2911": "8788ab49de4a4f399ab1a3883ef83a69",
".git/objects/9d/981ee6bb9421b1d9361ff6201dd89cb186dd10": "cb6ae75ad27c56faa61c1b346ccfcc95",
".git/objects/9e/60eab1bff15a20dbfbcc2c0dac365104d47620": "e7bfebc1057abf56b12de019fb5d75ec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c58c506000026537160a0076e7d09cdce043ec": "b0555bd09897b23b75323df8828b58ce",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/e99e20c38a23e95295917d6a5cdb49a8489eb8": "daa46bdb83328438b3e1f0bb1b074657",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/67915cd40072ca646db6811eab9f46de5f4061": "fc026dda4db755c14f322db61ee40a15",
".git/objects/b0/98e14177e2e1ee0b6820c62b6d9c1c7fcb8351": "0d121b255efbf23e80ad01eee237c7f1",
".git/objects/b1/58963f262f5899a8d1b083b75da16230dadba2": "912944d63b26f1afe101b3b70dda988e",
".git/objects/b3/2020db7fea5b1e0b0b9ca4d34d15969db66479": "be86dab52353309b2fcfb32314059c4d",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b6/d4eea3018527650892ac13ccdb8a1c932e2936": "afcbe3c78f2e0d33317b6263f5879809",
".git/objects/b7/2cc6c48641a7b8b2bf1ffaf38db4940285d9e0": "2f477aac91d23850c0ef63a631e12f96",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/648a3fd3882e751928e76169c35993fce0d758": "000d718a33eb28be2141f8b25e72024f",
".git/objects/b7/7e0dbd41527dcba93c570360eb1a7b2bb42ea6": "c5a098d9eb2ac1fe86690161c6fa5345",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/586150b00b8006c70f9547eb8590560c0fa582": "4eeb68d3ebe235383ba991412caf8ee5",
".git/objects/bf/48415ecd676c29c674f9e6a4a52443a887fbeb": "fc5eba0a15b4c50de3ca6e2df9a04228",
".git/objects/c0/1f0b6d7e799ed8298353daf2c15250bbceb6a3": "d1c2a636a0c24cd8a7fd2deffd687431",
".git/objects/c0/f86134ca4c2975b21b6b387437d2fe346d3833": "9f111c4764857fbe25305871ca6d96a5",
".git/objects/c2/1d0f9b703995b6ca9275cf77329956240dc685": "42cb0570f283dbb25d4433e72860eb36",
".git/objects/c2/2a285f4ab726e8d3699f71b63885d7c5d68a72": "387d71108caa09e118b2923ac3fa784d",
".git/objects/c3/af957be32ae01411fa5fedf3060f44eee2bb8b": "0a2c33d2e91eee91a762c751f1f29018",
".git/objects/c5/a35f4dd4e153fae52aa45250f2fa8ebf679e9b": "cdac6075b4e01c949a4b7f6f6e426440",
".git/objects/c6/731b8ef732445bea4fcc9da568701372eead00": "afd39fbf4dc33509fc29b60975964ebf",
".git/objects/c7/84e3374c31542f0efc87ef7081f01786910f0a": "5f206d363a63818f1b0d9d9b2835b6e0",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/b6047e2d983bd835f02662f06acecce3dcf03c": "6ab95a642a49acf730ab90a790c3ffd2",
".git/objects/ce/ac75d75e6bcaf56823bacd051bd9f135af6f4a": "339275ef60385a218d05801d845443c2",
".git/objects/d2/3cd863379978f01200832781a8beab5a2d0281": "8c2436b821e8ca072951e3427557cf9f",
".git/objects/d5/a21deaee6b8c2c1067800c7eed7bab63e18795": "239a1dad09f2b2d0889e527d4bf030b9",
".git/objects/d5/cd5f54d66c0286f16f55fcdefe60ef8b78fbc0": "949f003f33fc3574ec4cbe4effd88182",
".git/objects/dd/15504605486a05f9eba3a99c3a7e59def8cb71": "7524c2b9355b7171708902809bfcf1ad",
".git/objects/de/51ec76afdcccce6782953555f6b1e0f8736587": "a2f2815d97f4c23ac72cf63303867545",
".git/objects/e0/ee7e7859049b070312dac6eb92e2c313041241": "5417f6af7c13b26b1cc69d05095c0ab8",
".git/objects/e2/7429280155087f332825876c3e1acc33e58cc9": "1820f023f5ff14debe606ff049cbd337",
".git/objects/e3/c02dd98a66572d1ca986d17b883f7d8ba04c91": "28c77faf818e63261f26263ca0f883ad",
".git/objects/e4/224b5bb21ede48589eeb4c91d7d5b4bef1162a": "5501f1c2649ecc16136d423d7781d9c8",
".git/objects/e4/5aa55baf4e99f18477f660cb634bafd5eda521": "99ea643e7d4a015b7e77bd87333030bf",
".git/objects/e4/754ebedc5d3c8449dbcbc6ef84912e1be88bbf": "48561fd3f869dd45a475117a3ee37c4f",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/fed4eb58960df1db93cc0cfb644872bc1d1b9c": "82110ed4665eb315384aadba89205273",
".git/objects/ed/a34b4436cf6f122ee240bf63c17fd11fc64b6e": "24ea947c3f23e924cd19b321e1e74f33",
".git/objects/f0/530ad52c77c56a2ec3fd7be9278acaa7dac092": "0ca3e0ac4cb9f8142bee33adfb36fa46",
".git/objects/f1/96f48ea36f256fb80b887f028637af8e0aa535": "1b4448647bbb44f1f9a94250403ee906",
".git/objects/f3/8ec4f2fd0b6b0fb0cb7211f31f0484b27c7d8b": "6e4b947a3321edeafe65d21004fcaa5c",
".git/objects/f3/f0a8e04ec2e1b0090df995c2efe3c13dd5f084": "2889319a27c0acf488d9e09955fdc8a3",
".git/objects/f5/9c7ce629cf070ffdf518e06ae82bd87b94854c": "43b8fc6580eff33e5834056e16490c55",
".git/objects/f5/c67dc83c426c15a32b9b40bae601ffa0d6b985": "92d961f3b37c60cfb9a040d1b1275203",
".git/objects/f6/19cf0d0c2eef069e1834a7ac92162c1c1d5a67": "ab8a1f102e48ab8d1fec2b1cd34d829e",
".git/objects/f9/ad24cb847fa92d3e379b2f89bc2d4e1aca30e4": "f78cfbddf2762e6d6b7739b155759e23",
".git/objects/fb/7b7e56f114a7e3093ce5302a09d987c357393b": "e88166bbc2f2bb51dd3ba24f452c1195",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fe/659d8e114cb7f10c8dd4a530da7a38ef56c15a": "356a5464e5b026e4622574610f5850ca",
".git/objects/ff/a4770bf8b57f7d9f5ca5cb1613daef8089d4bd": "1660f34c2fbf092a3a06ac81bb2272ba",
".git/objects/ff/b75416591982162a2f9f3e59dd28264a492ba4": "8dc24b7d7cdfe33b70373bb01a5f3a26",
".git/objects/ff/f229f87f511758931e169d33d8b5e0bdc3445d": "f88bd16d41ecb271836d21b595abb82b",
".git/refs/heads/master": "af1c3e4d731b094468a134740d6fe158",
".git/refs/remotes/origin/master": "af1c3e4d731b094468a134740d6fe158",
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
"assets/NOTICES": "dafedad1bfc71b6fa307704e3a6c9c74",
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
"index.html": "f9fdbf5ed468ddd7132376fcafaf0d64",
"/": "f9fdbf5ed468ddd7132376fcafaf0d64",
"main.dart.js": "6c2305e25085cfecf00d11af10e72bae",
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
