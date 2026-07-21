import { Post, Story } from './types';

export const CURRENT_USER = {
  username: 'pixel_explorer',
  fullName: 'Pixel Explorer',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbFG2Vt82KnhBe67aIlmZE_Eg5hyAiRAA06oXyy6_yvR8lDojC35bwBnStBdtheesZ2rZjCnqMKdukzGeTz5QRFjza7Wl7SfNjvfD09jFNs_YXDfcdJ2s0WD6KjZusMXPMwPSFbcqaFwR-Zk_5rIYE1ykTx6Nv_fJNKuKr2k62nxwbUd-tPn-b1cgA1Lmklz-XyC08Ok0fHVa0pGnOyRIi6mFlKy4ZtQQqd6hFXn7msItV01VVsrEa3B1Q72k9oIIb7IMmXkzILvs',
  category: 'Digital Creator',
  bio: 'Capturing the unseen in the mundane. 📸\nVisual Storyteller | Tech Enthusiast',
  link: 'linktr.ee/pixel_explorer',
  postsCount: 124,
  followersCount: '12.5K',
  followingCount: '842',
};

export const INITIAL_STORIES: Story[] = [
  {
    id: 'user_story',
    username: 'Your story',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt8ArlPywCq9GO_KrbJ5zJIO-dEeD0xk3wcHcg5p4upS4opQV7HttE0crhlW-JFn3YqD_cNxdeikjJB4nF3BP2N8_bnEd2eGfC2NKrLGbYoKWaP1dQWdX8XcKxsEaLb8xWkFp3mGUoFIC1ql_CjA6JGsHNtbuOgIJs-5v5r9qnBBoICugKpt8Awu9PHGkTOFKLDstDWh3TQEgC1tcMG8d9BHDEbbaIV9V3ftx0c-CEs9KkKLp_2UXCLeUaxjoMzj7yfdTHZIHC1l8',
    viewed: false,
    items: [
      { id: 'us_1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbGtwxp1C4-IJ9dkxdHKsRYf45UC6dqPXZxZYeXkJHbqwgjuuKZWEVJxVrqXuMP87DtpoGJSn1ptkSu_6nDWqBk-GsniNbvJj73sZeCNXH_yOBiPowecSCyupgvgTr9G9mdSKHdBIRXO-c7w07E4XPYJxWyVbotJ9ktxMI5Mgf5LmSr9yvcOyjYTdMP7kNCNAWmuFQJ_AistIe8X0GX7-NB6jMUQ-cOiAkD0sPufKipTfjFKdYU7_5fC7RLfqrVRWd-sGLUG76jE', type: 'image' }
    ]
  },
  {
    id: 'lexi_vibe',
    username: 'lexi_vibe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcjIzYGvC2Qq7RQYr2Sv2e2smciDkM-6pPd8S_d0JsiYA3WKJQ9K_kByrXZcQFrsDEajZD3WrfJ3YqzD44t6Ssiev_7sRcAOqTcUGxd4NG7u-L03I6SdLZIFdGGMKJYETL-3xKnA-HAC6N98IH2fDmvnYJV1tVSni7lcBEb1unLK7agq6_vJIzu9ZWm0BIIqHakbSiXKAGS6UMmgeK4lHL6rCAOQ5eKM6uL2eBIdp6BzBzVgLoQ7j_kzUPYAXUx25vhERI7_0blYM',
    viewed: false,
    items: [
      { id: 'lv_1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt3-C7Fd8L17mEpdh04LoeDJDpsoN9HgkM_RznoeVzWlIf3PVAzjbEsLWA6EKCH2ln-bGHXRnlf5S15d2PXyjNj5eMg6BWMG5A1HrGRAW4McUaFeSZjHWm-GWHiqeuja6GspIddfcGq7ziAyQrqLzBcEnT7XmqRHwzMUAv42yVfp7Vwfh5e1wMOnbDHTBXVkf-5N9geF5gawCYE_uMuKFMWn56byoAe5I302aOn2Z7KSn-Qu6dnlcKPjeU1iD14OBsLaThnNEMt_U', type: 'image' },
      { id: 'lv_2', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB69dhq3qsIBGum49lDCPhPYhLbUJU1FtYVFJ4u-YO3Kjjiqh4AgI15S-xMRGwqFaioXJUn3l6orOdmZLYEAo16yAvwGE-rJEm4RfDLp-Ji43jaMYewGMltNvUeuZiGxKwH6BN3JdgRixwC3evPIy-Mfm9kgbWD1LiuBtAQwj0ODwIMk11jgluNMO3Hl1uRJn6ggDapaKpjALhUmWG5KbZnlSIeOkJ55Lo_2P5otU5X6FzpDDSeqU4F0_HQ3BqNdp_UzsOwlMMBOk0', type: 'image' }
    ]
  },
  {
    id: 'art_logic',
    username: 'art_logic',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxDnfUW7Lnxb2Dm8W4ye18MdkQNhwGruDl_efzXHluYMe9Gt6m7eh2-szyYb0KEdR2KlDf-ZVUTCBZr5B-kh4L_FmgjfTvs-8VVICMQ5xaE4uLedp9ZFG3uDZfJBLvylrS0c2Wj4fl9mXgSG4AAfZU9wurepXsBmuqqGLB6xZFC85Tq6Gq0e3lPstEu3HKnTf72fPPiA747H-34oFBikOQ5IIRvaU67_E6JA_VeG2vgZN8wmKRa4pJQcioPlld_M08RrBO18ZNcG8',
    viewed: false,
    items: [
      { id: 'al_1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkfdnkAe2SiRcLpE3SAoEf165BHF5SEuFWS5gNCjFSlz-jj-xZad3z9k9ELIe29uvEJAcUMNkknD8jwPU0ctK54j4jJzJIyEN2tb1AlA4jq4dh0I9Gc2UO2eh-C8oHPJ9xmQ1UB3x85CJhagabi6Ra_ScJdgR0_o9hNJGEoE01o7o_Y5JwVMl7DzO999G3bnPslbm3NuWcSsMUqAIQAGuEBSgfZbXCiPKCq0b7FhWGeaXVKDGCar-QHTEwG9_J3427axn87j8KZTQ', type: 'image' }
    ]
  },
  {
    id: 'wander_lust',
    username: 'wander.lust',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCngU2v-8ZepHq46_K5byWmHt6xQEYieOt_mf7fDNJ7hqapmoRQ4uf45uFZxetZ6-QaDDiXF11BHQLGGbBYE3CJIBy_lGY_kAFTeQLcIz_D4-Bg9tsOa5nHDrgIggYD0sOSw95PT3obeRPma05hWQbg8_riFfDh6QZXu6mCJ3NIDG2_G1el6dse7IPWGKL2ERHlQAoP0dVe4P4boJBSSHOwls82oG30xgEzpXcjtdZ4NakH7lZzRf7KJN9RZhW360TjtWV3pTJ3g1o',
    viewed: false,
    items: [
      { id: 'wl_1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7laQT2KoKmw4UpHVvWOcYdSyFQcy_6ZIdAyHgjPpWn5z-c2z5pWL1fG2QdYxkKQOJ3gaztanrfD6pQthnXjB7ZmfdbiqXl2yhyaci-dr8U8Nm9B_Zq12iag8iSljnZ467ahxK_qJxKCQqaKm41fNHe1kXUeHu2mPwF5fL8ArEVo8rHdc25v7QyVCleG37TZbTtMkJKRj6giOGo25Udzdg4Isj4Tfn-D91W46ER9Un1rsnGQmBamUurH6QlqMJ5WOl1myNchZjRk', type: 'image' }
    ]
  },
  {
    id: 'jdm_night',
    username: 'jdm_night',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9nOASK6wqj42CtGk9uie--cxf3NdhCUaAk78QXL__px6I08500I1fTDa5o_RSvXp-fu7LJwJd8jZJXxzeWIN5yN2dP0LO7tHcDwyWeBdDiH7yERwZsYQn8yeUghdqx1IajYExTfUJ8Rqb1btGSknkwcmZy8pAdE3Fb9_4H7MgiJrGDqdFBlp68dn-OwAKJDB4eo01VL0UkiP3BxCLhnlhYuODTTut3ANybmD1YXVk_aBD6iKlPMubVIV3klszRdpUXzNL0blsR7Q',
    viewed: false,
    items: [
      { id: 'jn_1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-1ADbWarSyYZN5_YGCRYEqMlJvbOyLrWLEYPqd2SgQKgIeXtJkNxCVyqUNq5JfMymGm8wVT1qlVnOlIgS9_wdfU5mJlZPfn_rD6QnLrrpAMiHCz4IYWsJuoAS1jMt_SpB65NJRR2miaSGcq56hME-201OdcpAd74J3Xo5gJgLye8NKZCL0zmMJlXv7OMdCd5TwRXIAAHVH_lykPNDDAoS3UBADD4ksBE2gUIrawxk1ahfVJ05i0WP6jmXW1Gdia5spzkpCu5tSkE', type: 'image' }
    ]
  }
];

export const INITIAL_FEED_POSTS: Post[] = [
  {
    id: 'post_1',
    username: 'creative_minds',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTB9LAvj98nwQfmfETQrRquP1kAevhOPHFdy0R90osB_QqooSrLRSdEIoctf0bdBL4ra96zQ6RhiG7PSuwgVnf5tlwXl5tlbQsWljVeNUcxKhlEJ0HRyR-cyPfwegSeJ4FLgLQoTJp_wRsZZMI0j2xwCS7jqZwVma3yrqCdZufY5EHln6Yj6taJ8v-D7MHg844SFPtx32aSU7byqxfUzTrCzPoys0WBXZE3hMgA0xvGPdip30GnbEjB2yGgYtAVHQUKPlxx8lVWoo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFE74CwWAuiub-oVHOVKw6Qdb7L086wMJkLc_5Yg-nvDYonAufZbiA9SaTU9QcOJUrbo4uCsVb8_aKFkKlaQqTm0jcGLSp7ofq9mlWn1uPctXCySOsPrOnDJpjl4HhOwUNX0KcYtdEMsUiOg8FfqhIFiO2lE-JAdecFzAR0XJI9T-NWUtDq14W4zNQWwJcwLQo8h72ONBglBW-cx45aZeRPld5FBXw45MagzqbeTPF2iPuj0_NJIg63V6pxLY94D_NioHEazaSWDs',
    likes: 1245,
    hasLiked: false,
    caption: 'The beauty of minimalism is in the silence it creates. Exploring the new Brutalist wing in the city. 🏛️',
    comments: [
      { id: 'c1', username: 'arch_lover', text: 'This lighting is pristine!', timeAgo: '1h' },
      { id: 'c2', username: 'zen_spaces', text: 'Stunning structure. Brutalism at its best.', timeAgo: '45m' }
    ],
    timeAgo: '2 HOURS AGO',
    category: 'Architecture',
    location: 'Brutalist Wing, City Center'
  },
  {
    id: 'post_2',
    username: 'tech_nomad',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWMfJz1jhQs-8HOVL1tuMMcX5ELPUAhWUMUfTA2Dj-vSI9Bfrcgw_QeiRC8ia7axMASEmaV8396Quk2z9_f4t9XvnnRTdnOJpUeXD1hGzuSNw1EWcxQDqPCRUEu9RmLUhHNryA6Xwx5kyIGA7CGoo6wMtXfkd-bqsuWbpSGWRrsDZsh0eG5XMv911MgbCFtiNF2k3KMB0FeiGCciJDV38mTuIGjXwLF7-AMUAZ4EkwcivTO4YLX-a7qcVU9ZmgWQtzSREKM_-ncc',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABr0alCFUysagHiB9hBq1dHCVZbYpL7CoiEAymsfqcSdr_kjcIkeIp1lMks5Lb_CKs5PuaSOZ4g8zjwe5xIUTNoT-m20LMOF7dZPiwwgJ7_qc6YIqLQfSKHxRoRn3M7RoLrXHiq6YsNMEaJXHLnogVFi35XgbF4BvHC55hg_tHjhIYTZ5_9Aj0eyu5QKNF0JLmI9-O9CfYrT8EH8pYzHlVxV8Ncdh8LpE7a0T6RcVQARkNyCXG6nSjvZvYOABeAg-F2DJr0ChLvCQ',
    likes: 8902,
    hasLiked: true, // starts liked based on red fill icon
    caption: 'Late night sessions hits different when the setup is right. Ready to ship this new feature. 🚀💻',
    comments: [
      { id: 'c3', username: 'code_monkey', text: 'Keycap set name please?', timeAgo: '4h' },
      { id: 'c4', username: 'setup_goals', text: 'Cleanest coiled cable I have seen!', timeAgo: '3h' },
      { id: 'c5', username: 'indie_dev_guy', text: 'Ship it! looks awesome', timeAgo: '2h' }
    ],
    timeAgo: '5 HOURS AGO',
    category: 'Decor',
    location: 'Home Lab Setup'
  }
];

export const EXPLORE_POSTS: Post[] = [
  {
    id: 'exp_1',
    username: 'brutalist_fashion',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTB9LAvj98nwQfmfETQrRquP1kAevhOPHFdy0R90osB_QqooSrLRSdEIoctf0bdBL4ra96zQ6RhiG7PSuwgVnf5tlwXl5tlbQsWljVeNUcxKhlEJ0HRyR-cyPfwegSeJ4FLgLQoTJp_wRsZZMI0j2xwCS7jqZwVma3yrqCdZufY5EHln6Yj6taJ8v-D7MHg844SFPtx32aSU7byqxfUzTrCzPoys0WBXZE3hMgA0xvGPdip30GnbEjB2yGgYtAVHQUKPlxx8lVWoo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt3-C7Fd8L17mEpdh04LoeDJDpsoN9HgkM_RznoeVzWlIf3PVAzjbEsLWA6EKCH2ln-bGHXRnlf5S15d2PXyjNj5eMg6BWMG5A1HrGRAW4McUaFeSZjHWm-GWHiqeuja6GspIddfcGq7ziAyQrqLzBcEnT7XmqRHwzMUAv42yVfp7Vwfh5e1wMOnbDHTBXVkf-5N9geF5gawCYE_uMuKFMWn56byoAe5I302aOn2Z7KSn-Qu6dnlcKPjeU1iD14OBsLaThnNEMt_U',
    likes: 4203,
    hasLiked: false,
    caption: 'A cinematic, high-fashion vertical portrait of a model standing amidst a brutalist concrete garden at dusk.',
    comments: [],
    timeAgo: '1 DAY AGO',
    isVideo: true,
    category: 'Decor'
  },
  {
    id: 'exp_2',
    username: 'gourmet_chef',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcjIzYGvC2Qq7RQYr2Sv2e2smciDkM-6pPd8S_d0JsiYA3WKJQ9K_kByrXZcQFrsDEajZD3WrfJ3YqzD44t6Ssiev_7sRcAOqTcUGxd4NG7u-L03I6SdLZIFdGGMKJYETL-3xKnA-HAC6N98IH2fDmvnYJV1tVSni7lcBEb1unLK7agq6_vJIzu9ZWm0BIIqHakbSiXKAGS6UMmgeK4lHL6rCAOQ5eKM6uL2eBIdp6BzBzVgLoQ7j_kzUPYAXUx25vhERI7_0blYM',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLJcdFe2d4OFntSSCqbwWuT_U1mGRtXgzU9d9F_E94JDmc4HrNMwP22Zb_ifEIoo9D80bqyfmREI7-fRBaAQT46Vzae272AtlTF_2C6M4U8Hu0MDsMEHKGiPCFhN6bnwsBLohmjvhqf4gogOzAsWJjz9me2qzOp1Ot9x6r8DyICAV3BOIgOT9nx2KuutS0JqXgsQmpoDNjoA6WluP-PS_Md-eulQ8J-N7_i3p6UG5nhcthBEaxmo4TDiQOOI-WYyWu4BM46f_ZwZs',
    likes: 1893,
    hasLiked: false,
    caption: 'A close-up shot of a gourmet minimalist dessert served on a matte black plate with edible gold.',
    comments: [],
    timeAgo: '2 DAYS AGO',
    category: 'Food'
  },
  {
    id: 'exp_3',
    username: 'ocean_drifter',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxDnfUW7Lnxb2Dm8W4ye18MdkQNhwGruDl_efzXHluYMe9Gt6m7eh2-szyYb0KEdR2KlDf-ZVUTCBZr5B-kh4L_FmgjfTvs-8VVICMQ5xaE4uLedp9ZFG3uDZfJBLvylrS0c2Wj4fl9mXgSG4AAfZU9wurepXsBmuqqGLB6xZFC85Tq6Gq0e3lPstEu3HKnTf72fPPiA747H-34oFBikOQ5IIRvaU67_E6JA_VeG2vgZN8wmKRa4pJQcioPlld_M08RrBO18ZNcG8',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsoBDz9yUmJKv2I48sV2rGc9U-Y75UIFeVq1pinjaGV1oPkqcJiWn0xpmTQHv8dvPnB1FQFTj182ulvuEoWwhQKj5KMhCfJwo4YhY71NgjhN746GTNlXYyPatnmDiEjSUgzrNpfTbJkWxBFq6e6jqj19JYtZwHPhoBmVeXpoAftcKfpBEdO6dWhLIG6TtfWv2qVZt1cjBIW-Fdl-O7IBo6bBk7qEQ3EWz5n9z508jpwlQ_SKcb6zGKAePJ6Zmn_TCXK7_ukvTNqMg',
    likes: 6732,
    hasLiked: false,
    caption: 'An aerial top-down view of turquoise waves crashing against dark volcanic rocks in Iceland.',
    comments: [],
    timeAgo: '3 DAYS AGO',
    isCarousel: true,
    category: 'Travel'
  },
  {
    id: 'exp_4',
    username: 'design_nexus',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCngU2v-8ZepHq46_K5byWmHt6xQEYieOt_mf7fDNJ7hqapmoRQ4uf45uFZxetZ6-QaDDiXF11BHQLGGbBYE3CJIBy_lGY_kAFTeQLcIz_D4-Bg9tsOa5nHDrgIggYD0sOSw95PT3obeRPma05hWQbg8_riFfDh6QZXu6mCJ3NIDG2_G1el6dse7IPWGKL2ERHlQAoP0dVe4P4boJBSSHOwls82oG30xgEzpXcjtdZ4NakH7lZzRf7KJN9RZhW360TjtWV3pTJ3g1o',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2-A9KONRla4PBcV0d0xabiyst9KW7LmVOdkeIcXmrgTMK9aldvH2OoVq4y6pSc5Nll5Ri-IF81E_BVPv8JgrCrgZO1Z4nJOBzBP4A_ztIFAESp6BDkiqlkeDcS4jg3CEEw9eKKeGjJdEI2VLKJTtqOmABS0Mv0yrRmd8VA-nuiXG7nvxqIxdbMv5iwyedajrlMXTKC1UTkf8iYM6myfXcELIXCO0TP6oxRKZA6yJEMYmsCGArg_mjpPnFh1U8tnhdTMAxkGA0rwE',
    likes: 5410,
    hasLiked: false,
    caption: 'A futuristic architecturally designed living space with a digital background city view.',
    comments: [],
    timeAgo: '4 DAYS AGO',
    category: 'Architecture'
  },
  {
    id: 'exp_5',
    username: 'hyper_drive',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9nOASK6wqj42CtGk9uie--cxf3NdhCUaAk78QXL__px6I08500I1fTDa5o_RSvXp-fu7LJwJd8jZJXxzeWIN5yN2dP0LO7tHcDwyWeBdDiH7yERwZsYQn8yeUghdqx1IajYExTfUJ8Rqb1btGSknkwcmZy8pAdE3Fb9_4H7MgiJrGDqdFBlp68dn-OwAKJDB4eo01VL0UkiP3BxCLhnlhYuODTTut3ANybmD1YXVk_aBD6iKlPMubVIV3klszRdpUXzNL0blsR7Q',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-1ADbWarSyYZN5_YGCRYEqMlJvbOyLrWLEYPqd2SgQKgIeXtJkNxCVyqUNq5JfMymGm8wVT1qlVnOlIgS9_wdfU5mJlZPfn_rD6QnLrrpAMiHCz4IYWsJuoAS1jMt_SpB65NJRR2miaSGcq56hME-201OdcpAd74J3Xo5gJgLye8NKZCL0zmMJlXv7OMdCd5TwRXIAAHVH_lykPNDDAoS3UBADD4ksBE2gUIrawxk1ahfVJ05i0WP6jmXW1Gdia5spzkpCu5tSkE',
    likes: 9340,
    hasLiked: false,
    caption: 'A macro shot of a sleek, matte black sports car’s headlight assembly glowing at night.',
    comments: [],
    timeAgo: '4 DAYS AGO',
    category: 'Decor'
  },
  {
    id: 'exp_6',
    username: 'office_vibe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTB9LAvj98nwQfmfETQrRquP1kAevhOPHFdy0R90osB_QqooSrLRSdEIoctf0bdBL4ra96zQ6RhiG7PSuwgVnf5tlwXl5tlbQsWljVeNUcxKhlEJ0HRyR-cyPfwegSeJ4FLgLQoTJp_wRsZZMI0j2xwCS7jqZwVma3yrqCdZufY5EHln6Yj6taJ8v-D7MHg844SFPtx32aSU7byqxfUzTrCzPoys0WBXZE3hMgA0xvGPdip30GnbEjB2yGgYtAVHQUKPlxx8lVWoo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5zw0MQIgantIktAWiofMtyZEqWXJHOXKoGxwevEhUOCxJKyyJQnIHI-UORgmXHabgODxQQ7jzeWH4l_UwoOneyMcS5clrG4tHI0WuMqLaIRTCAH1Lo_wxY83rYSRBv-uQ8CxTtu2EbfLuiNTL8o4Ej5TqaQSZd4f0RdT-h4g-kK_bjh6wWYoGOqEXzjFHL1bvpMiBEn4W1Xd1RAHbHFNEnvQLSfzax3rUKgIFVusPdW6gEey-oiyRyQyVvYAgHIVZlEg_4kmF6iA',
    likes: 3102,
    hasLiked: false,
    caption: 'A creative flat-lay of modern workspace essentials including a keyboard, laptop, and sketch pad.',
    comments: [],
    timeAgo: '5 DAYS AGO',
    category: 'Decor'
  },
  {
    id: 'exp_7',
    username: 'nebula_art',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcjIzYGvC2Qq7RQYr2Sv2e2smciDkM-6pPd8S_d0JsiYA3WKJQ9K_kByrXZcQFrsDEajZD3WrfJ3YqzD44t6Ssiev_7sRcAOqTcUGxd4NG7u-L03I6SdLZIFdGGMKJYETL-3xKnA-HAC6N98IH2fDmvnYJV1tVSni7lcBEb1unLK7agq6_vJIzu9ZWm0BIIqHakbSiXKAGS6UMmgeK4lHL6rCAOQ5eKM6uL2eBIdp6BzBzVgLoQ7j_kzUPYAXUx25vhERI7_0blYM',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB69dhq3qsIBGum49lDCPhPYhLbUJU1FtYVFJ4u-YO3Kjjiqh4AgI15S-xMRGwqFaioXJUn3l6orOdmZLYEAo16yAvwGE-rJEm4RfDLp-Ji43jaMYewGMltNvUeuZiGxKwH6BN3JdgRixwC3evPIy-Mfm9kgbWD1LiuBtAQwj0ODwIMk11jgluNMO3Hl1uRJn6ggDapaKpjALhUmWG5KbZnlSIeOkJ55Lo_2P5otU5X6FzpDDSeqU4F0_HQ3BqNdp_UzsOwlMMBOk0',
    likes: 12044,
    hasLiked: false,
    caption: 'A stylized digital illustration of a cosmic nebula exploring colorful swirling cosmic dust.',
    comments: [],
    timeAgo: '1 WEEK AGO',
    category: 'Art'
  },
  {
    id: 'exp_8',
    username: 'street_skate',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxDnfUW7Lnxb2Dm8W4ye18MdkQNhwGruDl_efzXHluYMe9Gt6m7eh2-szyYb0KEdR2KlDf-ZVUTCBZr5B-kh4L_FmgjfTvs-8VVICMQ5xaE4uLedp9ZFG3uDZfJBLvylrS0c2Wj4fl9mXgSG4AAfZU9wurepXsBmuqqGLB6xZFC85Tq6Gq0e3lPstEu3HKnTf72fPPiA747H-34oFBikOQ5IIRvaU67_E6JA_VeG2vgZN8wmKRa4pJQcioPlld_M08RrBO18ZNcG8',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtw5PNSft-vAZxUVz4jL39Lf9bTOxvlDCSFoNp3JFiEFJqJVCyaAA8nX6adbIPq6Jd821zHXfR2oYw3rPhlHEYh3OJqpguOF-92FCRI1y-OXd2ZuulqhBKUqmfFHIIsj9EDKcM0YpDqjsOXtzFu2VK2_y5SLV9RpJrZrcA02kgFdQXpXm0SLmOiKF1jY3Pongz_Q_qCBw7s6b8nucx-iJRW8oD7kvBTh_UQVzcCt_iK22SwbhBijCyN-L2cou-LTFaMVsulVAS5oE',
    likes: 8301,
    hasLiked: false,
    caption: 'A high-speed action shot of an urban skateboarder flying over stairs with London backdrop.',
    comments: [],
    timeAgo: '1 WEEK AGO',
    isVideo: true,
    category: 'Travel'
  },
  {
    id: 'exp_9',
    username: 'cozy_cabins',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCngU2v-8ZepHq46_K5byWmHt6xQEYieOt_mf7fDNJ7hqapmoRQ4uf45uFZxetZ6-QaDDiXF11BHQLGGbBYE3CJIBy_lGY_kAFTeQLcIz_D4-Bg9tsOa5nHDrgIggYD0sOSw95PT3obeRPma05hWQbg8_riFfDh6QZXu6mCJ3NIDG2_G1el6dse7IPWGKL2ERHlQAoP0dVe4P4boJBSSHOwls82oG30xgEzpXcjtdZ4NakH7lZzRf7KJN9RZhW360TjtWV3pTJ3g1o',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7laQT2KoKmw4UpHVvWOcYdSyFQcy_6ZIdAyHgjPpWn5z-c2z5pWL1fG2QdYxkKQOJ3gaztanrfD6pQthnXjB7ZmfdbiqXl2yhyaci-dr8U8Nm9B_Zq12iag8iSljnZ467ahxK_qJxKCQqaKm41fNHe1kXUeHu2mPwF5fL8ArEVo8rHdc25v7QyVCleG37TZbTtMkJKRj6giOGo25Udzdg4Isj4Tfn-D91W46ER9Un1rsnGQmBamUurH6QlqMJ5WOl1myNchZjRk',
    likes: 11200,
    hasLiked: false,
    caption: 'A serene landscape of a lone, minimalist cabin in a snowy forest at night with warm lighting glowing inside.',
    comments: [],
    timeAgo: '1 WEEK AGO',
    category: 'Travel'
  },
  {
    id: 'exp_10',
    username: 'acrylic_pour',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9nOASK6wqj42CtGk9uie--cxf3NdhCUaAk78QXL__px6I08500I1fTDa5o_RSvXp-fu7LJwJd8jZJXxzeWIN5yN2dP0LO7tHcDwyWeBdDiH7yERwZsYQn8yeUghdqx1IajYExTfUJ8Rqb1btGSknkwcmZy8pAdE3Fb9_4H7MgiJrGDqdFBlp68dn-OwAKJDB4eo01VL0UkiP3BxCLhnlhYuODTTut3ANybmD1YXVk_aBD6iKlPMubVIV3klszRdpUXzNL0blsR7Q',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkfdnkAe2SiRcLpE3SAoEf165BHF5SEuFWS5gNCjFSlz-jj-xZad3z9k9ELIe29uvEJAcUMNkknD8jwPU0ctK54j4jJzJIyEN2tb1AlA4jq4dh0I9Gc2UO2eh-C8oHPJ9xmQ1UB3x85CJhagabi6Ra_ScJdgR0_o9hNJGEoE01o7o_Y5JwVMl7DzO999G3bnPslbm3NuWcSsMUqAIQAGuEBSgfZbXCiPKCq0b7FhWGeaXVKDGCar-QHTEwG9_J3427axn87j8KZTQ',
    likes: 4322,
    hasLiked: false,
    caption: 'An abstract art piece showing fluid acrylic pouring with beautiful monochrome textures.',
    comments: [],
    timeAgo: '2 WEEKS AGO',
    category: 'Art'
  },
  {
    id: 'exp_11',
    username: 'exotic_birds',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTB9LAvj98nwQfmfETQrRquP1kAevhOPHFdy0R90osB_QqooSrLRSdEIoctf0bdBL4ra96zQ6RhiG7PSuwgVnf5tlwXl5tlbQsWljVeNUcxKhlEJ0HRyR-cyPfwegSeJ4FLgLQoTJp_wRsZZMI0j2xwCS7jqZwVma3yrqCdZufY5EHln6Yj6taJ8v-D7MHg844SFPtx32aSU7byqxfUzTrCzPoys0WBXZE3hMgA0xvGPdip30GnbEjB2yGgYtAVHQUKPlxx8lVWoo',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXCDYV9zaip0JOMnp1bqOvoggsgAkz79liabEshywqeJ7RZt5QkxJ2UWK37uukNtI9lCJv70fcZminJzMcL4cY7bXC_78drQIfChGlLG2DtnJeltiNwxaLPiSdTg1l2s0DylsaxpmOOE8zSvwthDpgTUsmM8HEDf5R-8bWNmSV2NuJ8nqSYDjlaRBnr9XDljnEw_XiGzvy-5NM1_v73fBrevTB3rbkE92gyIKFtj__yZrKtbXlAnDosjtniR5IQnc-FVUGcxzBGg',
    likes: 9023,
    hasLiked: false,
    caption: 'A stunning vertical portrait of a colorful exotic bird perched on a branch in a tropical rainforest.',
    comments: [],
    timeAgo: '2 WEEKS AGO',
    category: 'Travel'
  },
  {
    id: 'exp_12',
    username: 'luxury_watches',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcjIzYGvC2Qq7RQYr2Sv2e2smciDkM-6pPd8S_d0JsiYA3WKJQ9K_kByrXZcQFrsDEajZD3WrfJ3YqzD44t6Ssiev_7sRcAOqTcUGxd4NG7u-L03I6SdLZIFdGGMKJYETL-3xKnA-HAC6N98IH2fDmvnYJV1tVSni7lcBEb1unLK7agq6_vJIzu9ZWm0BIIqHakbSiXKAGS6UMmgeK4lHL6rCAOQ5eKM6uL2eBIdp6BzBzVgLoQ7j_kzUPYAXUx25vhERI7_0blYM',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeG3Q03N49BTGT6H3xjulji5BpseL5_LxIbBmCKrBFFLgAvJh30ypOfMqcz1GUQqDgBc_2dKXGEImsHtV1qyUk6m4jgA7z3okwxHDIcDyO-aw1V2mInlgPtUs_ThYszEuqrUQRecoCCw7rhoarUg0dQuDm7ZlJ_vhynd2ZWnUQC5l9XMMcatWqlyLQVNXjnZ1RaPHHHh06s9coNfEmyURq3YpT0zy8St1cWaTNkwYUcsIOYWyfeE8Ct7NDE-5Zdngx_GlxnVdJbAo',
    likes: 15302,
    hasLiked: false,
    caption: 'A high-fidelity close-up of a luxury wristwatch showing exquisite skeleton dials and gears.',
    comments: [],
    timeAgo: '3 WEEKS AGO',
    category: 'Shop'
  }
];

export const PROFILE_POSTS: Post[] = [
  {
    id: 'prof_1',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbGtwxp1C4-IJ9dkxdHKsRYf45UC6dqPXZxZYeXkJHbqwgjuuKZWEVJxVrqXuMP87DtpoGJSn1ptkSu_6nDWqBk-GsniNbvJj73sZeCNXH_yOBiPowecSCyupgvgTr9G9mdSKHdBIRXO-c7w07E4XPYJxWyVbotJ9ktxMI5Mgf5LmSr9yvcOyjYTdMP7kNCNAWmuFQJ_AistIe8X0GX7-NB6jMUQ-cOiAkD0sPufKipTfjFKdYU7_5fC7RLfqrVRWd-sGLUG76jE',
    likes: 852,
    hasLiked: false,
    caption: 'Brutalist concrete architecture glowing under the night sky. Absolute pure lines.',
    comments: [],
    timeAgo: '1 DAY AGO',
    location: 'Metropolitan Square'
  },
  {
    id: 'prof_2',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZCBD0FX05HOAwHLJf-kiw66OBKt5Y5ErwlNAu2JqjPa7IGbmSZGGbHWmBrYicXzHm_w8B02QHeeAzmGN8zvVN2xZeWl-joxYIExIbirEXhucqJ7TLJxOejsiuMxvVydor5urjxUF8QEw23IWNGcifXgPZUWGue9KHKPrmSGI_rqN3_rDTStIrkiFe6F3d4pi24EH-zxO1OdofGoR--xsmj6W74_JICV_PViQs-43jhsHRBudxLhQVsx4c2oO8SLiIyGgEFLaWiNA',
    likes: 1205,
    hasLiked: false,
    caption: 'Light dispersion through a glass prism. Rainbow rays across a dark space.',
    comments: [],
    timeAgo: '3 DAYS AGO',
    isReel: true,
    location: 'Studio Experiments'
  },
  {
    id: 'prof_3',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBSHqgfDYKdC7ZKP_UY3EeDnZFVB5EL-laKtQ2827mVoFf40bCYhlE9VknTAvbRfvSa8sEJ6HRJxDw5sPCaveu31y96n5WM01gYjZMMS9DEeG3KHsOxu4O3pu6K_H5i2k7dO6OUpHJy11wj7LMpMAjg2o-LzfkTL94YqnvuMSSMv54z0AXV4g50mqssLL7dnMRXoptbPpO0BzCG71wrm7VZxQMKdjyQlEgJiHFNExlWJhgVsOL70pAsxBK4miqUK8PF7-f6J30HR4',
    likes: 933,
    hasLiked: false,
    caption: 'Dark textured flows mimicking waves of black sand. Nature’s organic patterns.',
    comments: [],
    timeAgo: '1 WEEK AGO',
    location: 'Black Sand Beach'
  },
  {
    id: 'prof_4',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm0--904TJTbQkcxJ7ZbGgK0ERenhuS8GnqzoQCuCzY-rIhLrlVXQ2gnTI4jXuCEECK4_CYYs-QJEqkue4nqxuHIqicQG360nv6E583sGoDafZ0LNOCr7PIqN-aSFac_wH6nSip-hXKnJ3ZaMSkBM4qdGHA9U-eQguZrjw0AODs_XsufIrMid6hpeYlBnklY2F7j_GOR0Gwakf4cfLtDaCynz1OAKU25SQKqviXN_NxHAoC0g8HwjaHtZSyvtIe2hYTT8jQZJlwj8',
    likes: 2311,
    hasLiked: false,
    caption: 'Intricate skeleton watch mechanics exposed. Precision engineering at its finest.',
    comments: [],
    timeAgo: '1 WEEK AGO',
    location: 'Watchmaking Lab'
  },
  {
    id: 'prof_5',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeQKvLzORLOU5n1VGZpPMt1xl4LsmiylRiBq0VR0As9KQ6Mt7UvjXYmt1sYPRGuinBNOJy9uwk7O_q46oYMrwnGTm6aPD4QrhS7xLRxN02aHsg7vSjtydQbYYpuQgO6LEQaYeN7jPjDeq33vBx8CdVq0CpD4vTSfhee8IO78nYkAXMmbgrdccqYFu22IrF-cdxfRbIg09tKAxFGBy8vL70ug6aGwfJP19mIZnXJsVmteyLU4XtRcGZlUgEPKhMzP7ecYcY6mUKu7I',
    likes: 4110,
    hasLiked: false,
    caption: 'Looking through rainy windows at a futuristic cyberpunk cityscape at midnight.',
    comments: [],
    timeAgo: '2 WEEKS AGO',
    isCarousel: true,
    location: 'Neo Tokyo'
  },
  {
    id: 'prof_6',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsxBSlOH2C_z0zYdXzxoHLJqIgEnEKnvfP16wwc2TweVcMBkiTcfZZoJTJsCwp-oKPR5BMOMYh0Saw24MzClmpsi0gLl72hOy-cmYE8gtKsnVH1S20uGuX-P1nT1rPAGJLPhEfNctiFsK5Z2MSVz7noIl6VlaLpJ9InqYKuCsvy-VJ3VlWDkSuXPNi5gD1uFgQfgZ67JZtkq1mjUvTnabkXp_b1WwzzaB8cxP7258fCaAYYF-87rkmTnF1NVtj1fzoz4v2_frpqUA',
    likes: 1989,
    hasLiked: false,
    caption: 'Minimalist warm lamp reflecting over dark water ripple effect.',
    comments: [],
    timeAgo: '2 WEEKS AGO',
    location: 'Luminous Spa'
  },
  {
    id: 'prof_7',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDztfa6ZLflul47NJcxYUJVOS47L8dFk_o-ARZS-leHJFazY5q-jIGEhmZ1tgrQZkiTbmz0VokSVW8A0BqkqcgiEZzNcrrLFhHv0xzuzZweFhBfs-j8i_OkwmMG9piSbzmS9dmGtd2Qje2LWAXsnpInVi33kK8FGCLxPt1JxNxHp3OTadBV0H1ZAnCUXblaVNsmdKfoLTn8QqQrHjnAvs7Buygu-wrzZwjJdNN7Y3j3sf_0Zm8UzJa4wLNwl9_gRqi4Uzma4cCzRbU',
    likes: 3102,
    hasLiked: false,
    caption: 'Dramatic mountain range peaks rising above high-altitude clouds in deep monochrome.',
    comments: [],
    timeAgo: '3 WEEKS AGO',
    location: 'Dolomites'
  },
  {
    id: 'prof_8',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwNJ3zcrjpiCgP-Wv9sc-mQ63rAFYrWADVmWuoo9KixAVTICEzi_o4EBIK4R-lXlj8-0RwA1_0kFDB--h7sfde9hTzQKP9-wKJ-NCKE8_kxNI-bmMoSEHS1RGnqqfvD-KJRb6w1RriSsQL_YgJscHAWnSzTH1ORfggiHQN7HeVeW74TscefwIVvJV12cKv3Eme1EvALHK3SUHLJ9RJPZeGkwKIAtxHsiTMj349X56ouHULyvYGEYSCOOHCruCwYUqocgY0iZsWRa0',
    likes: 5431,
    hasLiked: false,
    caption: 'Cozy late night coding workspace. Laptop open on lines of TypeScript with soft shadows.',
    comments: [],
    timeAgo: '1 MONTH AGO',
    location: 'Home Workspace'
  },
  {
    id: 'prof_9',
    username: 'pixel_explorer',
    avatar: CURRENT_USER.avatar,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeZeIIj84qgLiclVl8ieR8C1OJcz63fbAJdjDFHZvJS7PdtE6gSNTyznBdsXvx9Q5iaoIVWm-v7SABxt2Tm57yJKXZ9PK-5b67VxYfNbt5OmQ-3oyWByXy6-_CdRZD6h0LqTy9Zn7sWppBrHaePf7hoyMeegFWuvD8AtYwJRxS6mtDquGBi2gtBv_0zzKyFjee_aGlWhmWHb4q_5FNCRKGE085xKuhMy4Y8jCoxnF86_edgV68hX8i-VvJ3SFcJd9SsYgYOEodCZc',
    likes: 8402,
    hasLiked: false,
    caption: 'Futuristic macro texture of carbon fiber weaves catching sunlight.',
    comments: [],
    timeAgo: '1 MONTH AGO',
    location: 'Design Lab'
  }
];
