// pages/index/index.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    colortab: 0,
    cateItemsName:['女士上衣','女士外套','女士裙子','女士裤子','女鞋','男衣','男士裤鞋'],
    colorName: ['红', '橙', '黄', '绿', '蓝', '黑', '白', '紫'],
    nameImage: [],
    cateItems: [
      {
        cate_id: 1,
        cate_name: "上衣",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '卫衣',
              image: "http://mkzgr.top:4545/images/687f75fcad534630a8e0a0edb30b6e99.jpg"
            },
            {
              child_id: 2,
              name: 'T恤',
              image: "http://mkzgr.top:4545/images/68a0ba7a936a42c1b829a80353064b27.jpg"
            },
            {
              child_id: 3,
              name: '雪纺',
              image: "http://mkzgr.top:4545/images/eed1de7f203f415f86a5613fb0795c85.jpg"
            },
            {
              child_id: 4,
              name: '西装',
              image: "http://mkzgr.top:4545/images/2f6e31d51a634d1494090c41ce7b60a8.jpg"
            },
            {
              child_id: 5,
              name: '衬衫',
              image: "http://mkzgr.top:4545/images/47a56542757842f593591a3dd095ca8f.jpg"
            },
            {
              child_id: 6,
              name: '一字肩',
              image: "http://mkzgr.top:4545/images/a4384cab41134a09b52211c5164545a5.jpg"
            },
            {
              child_id: 7,
              name: '针织衫',
              image: "http://mkzgr.top:4545/images/2e53dcd619694fce8581e1b13c6cf30b.jpg"
            },
            {
              child_id: 8,
              name: '背心',
              image: "http://mkzgr.top:4545/images/0eb314f97888408197bcd0142706583e.jpg"
            }
            ,
            {
              child_id: 9,
              name: '棒球服',
              image: "http://mkzgr.top:4545/images/2cfeeeea2db345338afbb3e0da912df6.jpg"
            },
            {
              child_id: 10,
              name: '小个子上衣',
              image: "http://mkzgr.top:4545/images/2e1fd761a8384e19a5d27d5d425e82f9.jpg"
            },
            {
              child_id: 11,
              name: '羽绒服',
              image: "http://mkzgr.top:4545/images/78c85a38336c4476b033523409d12edb.jpg"
            },
            {
              child_id: 12,
              name: '毛衣',
              image: "http://mkzgr.top:4545/images/4141668ead0e4c7ab5db264424cd0776.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "外套",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '牛仔外套',
              image: "http://mkzgr.top:4545/images/d128bfdee1dc4952b36aa1c079188743.jpg"
            },
            {
              child_id: 2,
              name: '棒球服',
              image: "http://mkzgr.top:4545/images/38ddb1fc709548f38449424c7f8aafb8.jpg"
            },
            {
              child_id: 3,
              name: '开衫外套',
              image: "http://mkzgr.top:4545/images/952f51cdb24a4d748c2142d31ff019ed.jpg"
            },
            {
              child_id: 4,
              name: '轻薄外套',
              image: "http://mkzgr.top:4545/images/1c6f8edfc8864fb7b7108f4fd980892d.jpg"
            },
            {
              child_id: 5,
              name: '宽松外套',
              image: "http://mkzgr.top:4545/images/da37d0cdea294e80be174c6323234dac.jpg"
            },
            {
              child_id: 6,
              name: '小个子外套',
              image: "http://mkzgr.top:4545/images/ba7504243b494b6787d5fd24f72055a7.jpg"
            },
            {
              child_id: 7,
              name: '针织衫外套',
              image: "http://mkzgr.top:4545/images/b451cdc26e81406e9f402398212bc836.jpg"
            },
            {
              child_id: 8,
              name: '背心款外套',
              image: "http://mkzgr.top:4545/images/b9cbdd888660489b8bbaf1f83d57bc49.jpg"
            }
            ,
            {
              child_id: 9,
              name: '风衣外套',
              image: "http://mkzgr.top:4545/images/d7ff8669e5244d8dbb08cfb7519c232b.jpg"
            },
            {
              child_id: 10,
              name: '早春外套',
              image: "http://mkzgr.top:4545/images/abdf6ff0e63149b6b1c3494f9c6f673c.jpg"
            },
            {
              child_id: 11,
              name: '西服外套',
              image: "http://mkzgr.top:4545/images/0f47003ba8cd45fdac5f8bf68152e016.jpg"
            },
            {
              child_id: 12,
              name: '夏款外套',
              image: "http://mkzgr.top:4545/images/674b183a5def4bbda2001d38a49aff1d.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "女裙",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '碎花裙',
              image: "http://mkzgr.top:4545/images/a434f7d5a6694e4bb5a3d13d802abcaf.jpg"
            },
            {
              child_id: 2,
              name: 'A字裙',
              image: "http://mkzgr.top:4545/images/5e6923d8b65c4b01b182b34646dddfb6.jpg"
            },
            {
              child_id: 3,
              name: '吊带裙',
              image: "http://mkzgr.top:4545/images/43a9aecb5cd64e62bef1958b2fd5c118.jpg"
            },
            {
              child_id: 4,
              name: '仙女裙',
              image: "http://mkzgr.top:4545/images/db025be12eec44ba9d69c16ebf78e5cc.jpg"
            },
            {
              child_id: 5,
              name: '淑女裙',
              image: "http://mkzgr.top:4545/images/476ef8c952d54b44bb1d029277045924.jpg"
            },
            {
              child_id: 6,
              name: '背带裙',
              image: "http://mkzgr.top:4545/images/ef2a1ffc58674c8db4688ad605b4a6d7.jpg"
            },
            {
              child_id: 7,
              name: '半身裙',
              image: "http://mkzgr.top:4545/images/e6d8118e81f14055bd80ccc537b099f6.jpg"
            },
            {
              child_id: 8,
              name: '长裙',
              image: "http://mkzgr.top:4545/images/21c58f7f532144fdb5070b686c828abd.jpg"
            }
            ,
            {
              child_id: 9,
              name: '名媛裙',
              image: "http://mkzgr.top:4545/images/78447164d1f04bac89d25ca593a850f1.jpg"
            },
            {
              child_id: 10,
              name: '蛋糕裙',
              image: "http://mkzgr.top:4545/images/bd6e310c27734335bb326ca4f0c25285.jpg"
            },
            {
              child_id: 11,
              name: '沙滩裙',
              image: "http://mkzgr.top:4545/images/46821774767a4a65bac830ffcdda2863.jpg"
            },
            {
              child_id: 12,
              name: '雪纺裙',
              image: "http://mkzgr.top:4545/images/96abc7e3880b44a08106dc40c86e76de.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "女裤",
        ishaveChild: false,
        children:
          [
            {
              child_id: 1,
              name: '短裤',
              image: "http://mkzgr.top:4545/images/99f9c0461c1e40fcb136548eebae7b1f.jpg"
            },
            {
              child_id: 2,
              name: '运动裤',
              image: "http://mkzgr.top:4545/images/51d3bb256813458cb2747d4eae741bb9.jpg"
            },
            {
              child_id: 3,
              name: '喇叭裤',
              image: "http://mkzgr.top:4545/images/e574c96e7ba9404c9a02160abaeeabd5.jpg"
            },
            {
              child_id: 4,
              name: '西装裤',
              image: "http://mkzgr.top:4545/images/9a74c5656cfa4265842145050e118c9e.jpg"
            },
            {
              child_id: 5,
              name: '背带裤',
              image: "http://mkzgr.top:4545/images/a2e4617190824eab98aa2abb38c5f92a.jpg"
            },
            {
              child_id: 6,
              name: '正装裤',
              image: "http://mkzgr.top:4545/images/129399f679bf47c383d31bf104a05fee.jpg"
            },
            {
              child_id: 7,
              name: '雪纺裤',
              image: "http://mkzgr.top:4545/images/8bbc5d17d4d84eaab6b6d52664da863f.jpg"
            },
            {
              child_id: 8,
              name: '阔腿裤',
              image: "http://mkzgr.top:4545/images/4dec3fdd5ecf4d7f80a7009ee2b7d61e.jpg"
            }
            ,
            {
              child_id: 9,
              name: '工装裤',
              image: "http://mkzgr.top:4545/images/affee82904b54c95b68e5bf8664b979c.jpg"
            },
            {
              child_id: 10,
              name: '开叉裤',
              image: "http://mkzgr.top:4545/images/0e8b132960a44571b49a1009a2236fb6.jpg"
            },
            {
              child_id: 11,
              name: '牛仔裤',
              image: "http://mkzgr.top:4545/images/3a7f4d4d65d14e07b9b6355de6edb22a.jpg"
            },
            {
              child_id: 12,
              name: '休闲裤',
              image: "http://mkzgr.top:4545/images/1b190bd457284f9fa919588b76a779ee.jpg"
            }
          ]
      },
      {
        cate_id: 5,
        cate_name: "女鞋",
        ishaveChild: false,
        children:
          [
            {
              child_id: 1,
              name: '豆豆鞋',
              image: "http://mkzgr.top:4545/images/ddf7a480a98c494082d86af276a3bc13.jpg"
            },
            {
              child_id: 2,
              name: '高跟鞋',
              image: "http://mkzgr.top:4545/images/4431cd415be34bcaac7b183fe670928e.jpg"
            },
            {
              child_id: 3,
              name: '凉鞋',
              image: "http://mkzgr.top:4545/images/1429d77bfc104b0ebf3841390ab23e94.jpg"
            },
            {
              child_id: 4,
              name: '小白鞋',
              image: "http://mkzgr.top:4545/images/1e2d26793a05493fac1c2ce82568823a.jpg"
            },
            {
              child_id: 5,
              name: '英伦鞋',
              image: "http://mkzgr.top:4545/images/e33eb42febbc4252bf7e08f6cf406009.jpg"
            },
            {
              child_id: 6,
              name: '单鞋',
              image: "http://mkzgr.top:4545/images/86fc4ebf4f374af48a876a4afedf5017.jpg"
            },
            {
              child_id: 7,
              name: '踩底鞋',
              image: "http://mkzgr.top:4545/images/d0d0345b8eab4e7f971279651e637323.jpg"
            },
            {
              child_id: 8,
              name: '拖鞋',
              image: "http://mkzgr.top:4545/images/bd8c6c34a2e548d1ad4197752ee0f396.jpg"
            }
            ,
            {
              child_id: 9,
              name: '长靴',
              image: "http://mkzgr.top:4545/images/a3fea3f6e839493c9eabb908195c7b06.jpg"
            },
            {
              child_id: 10,
              name: '尖头鞋',
              image: "http://mkzgr.top:4545/images/944ad1c68629405ebf47ebac24cb9e18.jpg"
            },
            {
              child_id: 11,
              name: '运动鞋',
              image: "http://mkzgr.top:4545/images/b43975b7cbb64b5f8c243e57f8a6d072.jpg"
            },
            {
              child_id: 12,
              name: '帆布鞋',
              image: "http://mkzgr.top:4545/images/3d6a34055b114831a9536507c3013c17.jpg"
            }
          ]
      },
      {
        cate_id: 6,
        cate_name: "男衣",
        ishaveChild: false,
        children:
          [
            {
              child_id: 1,
              name: 'T恤',
              image: "http://mkzgr.top:4545/images/6c0bd92368844e8ba7ddf8b74f6dad64.jpg"
            },
            {
              child_id: 2,
              name: '卫衣',
              image: "http://mkzgr.top:4545/images/49ef3f7265104f66bc1002a4369f2aa7.jpg"
            },
            {
              child_id: 3,
              name: '衬衫',
              image: "http://mkzgr.top:4545/images/d554d770f54747d895df8fd6095c7fdb.jpg"
            },
            {
              child_id: 4,
              name: '夹克',
              image: "http://mkzgr.top:4545/images/7b2a1ac2dd0b4a02b519641811bebc1b.png"
            },
            {
              child_id: 5,
              name: '牛仔外套',
              image: "http://mkzgr.top:4545/images/027ba876587a4b1699de5acdb8fb2b40.png"
            },
            {
              child_id: 6,
              name: '西装',
              image: "http://mkzgr.top:4545/images/3f4476b2d03448e58c1702166673aa3f.jpg"
            },
            {
              child_id: 7,
              name: '运动服',
              image: "http://mkzgr.top:4545/images/c295dea3930149758639767a61dcecb3.jpg"
            },
            {
              child_id: 8,
              name: '长袖',
              image: "http://mkzgr.top:4545/images/f872a2bc04ba4558b2ad8bbb56d0ad88.jpg"
            }
            ,
            {
              child_id: 9,
              name: '风衣',
              image: "http://mkzgr.top:4545/images/bde433c7769d48748795010f22e4ccd5.jpg"
            },
            {
              child_id: 10,
              name: '背心',
              image: "http://mkzgr.top:4545/images/36515b2dd07143de8e0f4be647ae376a.jpg"
            },
            {
              child_id: 11,
              name: '毛衣',
              image: "http://mkzgr.top:4545/images/b7bb20bcfee34b1d9b3dfb2fed87b0a7.jpg"
            },
            {
              child_id: 12,
              name: '羽绒服',
              image: "http://mkzgr.top:4545/images/87131e30cfec40818a332f216f511bf8.jpg"
            }
          ]
      },
      {
        cate_id: 7,
        cate_name: "裤鞋",
        ishaveChild: false,
        children:
          [
            {
              child_id: 1,
              name: '短裤',
              image: "http://mkzgr.top:4545/images/cae4aca4121d448e96524bd283b5163c.jpg"
            },
            {
              child_id: 2,
              name: '运动裤',
              image: "http://mkzgr.top:4545/images/ff92b9e8ee854cf18e82dad86b17e445.jpg"
            },
            {
              child_id: 3,
              name: '牛仔裤',
              image: "http://mkzgr.top:4545/images/ab3ee401ffb84877983d938e20ccc4b1.jpg"
            },
            {
              child_id: 4,
              name: '西裤',
              image: "http://mkzgr.top:4545/images/d6fd77c54aef4c4893970b41ccc3b854.jpg"
            },
            {
              child_id: 5,
              name: '背带裤',
              image: "http://mkzgr.top:4545/images/aff1a999bb92455494e5ad699fa8b59b.jpg"
            },
            {
              child_id: 6,
              name: '休闲裤',
              image: "http://mkzgr.top:4545/images/9a0adf1fbd194e7283c95b846ed6d691.jpg"
            },
            {
              child_id: 7,
              name: '小脚裤',
              image: "http://mkzgr.top:4545/images/e9bbc07e37174a66a4bc3da926422593.jpg"
            },
            {
              child_id: 8,
              name: '哈伦裤',
              image: "http://mkzgr.top:4545/images/9f5d726370904d798e81bf1f6486c2b4.jpg"
            }
            ,
            {
              child_id: 9,
              name: '九分裤',
              image: "http://mkzgr.top:4545/images/6488282675f84d2d9f93756d426ebd0d.jpg"
            },
            {
              child_id: 10,
              name: '小白鞋',
              image: "http://mkzgr.top:4545/images/5b2596ec689244c48a63b4cab0e2aed2.jpg"
            },
            {
              child_id: 11,
              name: '休闲鞋',
              image: "http://mkzgr.top:4545/images/51f6d8c66778403e919cbf096b79bbd9.jpg"
            },
            {
              child_id: 12,
              name: '运动鞋',
              image: "http://mkzgr.top:4545/images/52110db8b9aa4cfe99063539e8713fdc.jpg"
            }
          ]
      }
    ],
    // style页面
    styleItems: [
      {
        cate_id: 1,
        cate_name: "日系甜美",
        children:
          [
            {
              child_id: 1,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%B7%91%E5%A5%B3.jpg?sign=0d663bf55f7bd89b041149e583abdc41&t=1557930985"
            },
            {
              child_id: 2,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%81%8B%E7%88%B1%E6%B0%94%E6%81%AF3.jpg?sign=880b87e0277f522a584872d02e29497a&t=1557929714"
            },
            {
              child_id: 3,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%97%A5%E7%B3%BB.png?sign=ddd0edbc43616955ae5568809a23f392&t=1557930918"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "淑女优雅",
        children:
          [
            {
              child_id: 1,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/1.png?sign=e7fab25c2cc8c1fbf18bcf27cd5357e7&t=1557929475"
            },
            {
              child_id: 2,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/2.png?sign=6016c0463af60cde2339c3d68cd1cb11&t=1557929501"
            },
            {
              child_id: 3,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%B7%91%E5%A5%B3.jpg?sign=0d663bf55f7bd89b041149e583abdc41&t=1557930985"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "文艺复古",
        children:
          [
            {
              child_id: 1,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%96%87%E8%89%BA%E5%A4%8D%E5%8F%A42.png?sign=e498d98d7431dd734bfe0c5d5b8de6d0&t=1557929444"
            },
            {
              child_id: 2,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%96%87%E8%89%BA%E5%A4%8D%E5%8F%A41.png?sign=d999d767ec2222bb07a882f313bc022e&t=1557929465"
            },
            {
              child_id: 3,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%96%87%E8%89%BA.png?sign=ea134282df4fcceff22d55d2a4d49355&t=1557931098"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "恋爱气息",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%81%8B%E7%88%B1.jpg?sign=8f7753e1651d71672b04cf694b649262&t=1557931160"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%81%8B%E7%88%B12.png?sign=13b86261ad1150472b3b8d01bf2bb193&t=1557934390"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E6%81%8B%E7%88%B1%E6%B0%94%E6%81%AF3.jpg?sign=880b87e0277f522a584872d02e29497a&t=1557929714"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "职场穿搭",
        children:
          [
            {
              child_id: 1,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%81%8C%E5%9C%BA%E7%A9%BF%E6%90%AD1.png?sign=6eb013c112fcc867013682fba980fe92&t=1557929841"
            },
            {
              child_id: 2,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%81%8C%E5%9C%BA%E7%A9%BF%E6%90%AD2.jpg?sign=a559dce8dbb90d3d783d94a66e4deb80&t=1557929866  "
            },
            {
              child_id: 3,
              image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%81%8C%E5%9C%BA%E7%A9%BF%E6%90%AD3.jpg?sign=fa518ba82ae8e94b1c49937cf6b8d510&t=1557929878"
            }
          ]
      },
      {
        cate_id: 6,
        cate_name: "国民风尚",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E5%9B%BD%E6%B0%911.jpg.png?sign=32ac7454f77a652d5b6d213dc0b1fde5&t=1557935452"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E5%9B%BD%E6%B0%91.png?sign=809088bef9335b425853f0cd3e0a481d&t=1557931306"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E5%9B%BD%E5%90%8D%E9%A3%8E.png?sign=508ade6adefc7a644de5eeb515beaefb&t=1557934459"
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "个性潮流",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E4%B8%AA%E6%80%A71.jpg?sign=7743474ec7bfcb7367cfdcf415f2730d&t=1557930217"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E4%B8%AA%E6%80%A72.jpg?sign=c25588802a8812fe01f52f4111a76efc&t=1557930232"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E4%B8%AA%E6%80%A73.png?sign=f1e7d4abd755ca88888a962bfafdb307&t=1557930244"
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "运动休闲",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%BF%90%E5%8A%A82.jpg?sign=40150c753dfaa83325f0a8eabbdaec02&t=1557930425"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%BF%90%E5%8A%A83.jpg?sign=1211a5d0e7fd261008eece5e13259a8b&t=1557930485"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E8%BF%90%E5%8A%A81.jpg?sign=0503edadbf7734794dbba02adb990663&t=1557930501"
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: "绅士熟男",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%BB%85%E5%A3%AB1.jpg?sign=09b236fbab7268cd3187e64715024460&t=1557930691"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%BB%85%E5%A3%AB2.jpg?sign=f67c758cbd901b2e226bdae32d0e3d4d&t=1557930710"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%BB%85%E5%A3%AB3.jpg?sign=e49e7d999751891d10cf24e0a9dc8a8a&t=1557930729"
          }
        ]
      },
      {
        cate_id: 10,
        cate_name: "简约时尚",
        children: [
          {
            child_id: 1,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%AE%80%E7%BA%A61.jpg?sign=b4346905f190d22a41de6ef46d1215b6&t=1557930823"
          },
          {
            child_id: 2,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%AE%80%E7%BA%A62.png?sign=7b8ea97e6de4d006daeb4cc8c76fa93a&t=1557930842"
          },
          {
            child_id: 3,
            image: "https://7765-we-63574e-1258830969.tcb.qcloud.la/style%E5%9B%BE%E7%89%87/%E7%AE%80%E7%BA%A63.jpg?sign=0a1878f5e7e3f41534d12fb784e887b8&t=1557930853"
          }
        ]
      },
    ],
    // 颜色页面
    colorImage: [],
    colorstyleImage: [],
    colorbt: [
      {
        colorname: '红',
        colorid: 1,
        coloricon: '/images/icon/red.png',
        child: []
      },
      {
        colorname: '橙',
        colorid: 2,
        coloricon: '/images/icon/orange.png',
        child: [ ]
      },
      {
        colorname: '黄',
        colorid: 3,
        coloricon: '/images/icon/yellow.png'
      },
      {
        colorname: '绿',
        colorid: 4,
        coloricon: '/images/icon/green.png'
      },
      {
        colorname: '蓝',
        colorid: 5,
        coloricon: '/images/icon/blue.png'
      },
      {
        colorname: '白',
        colorid: 6,
        coloricon: '/images/icon/white.png'
      },
      {
        colorname: '黑',
        colorid: 7,
        coloricon: '/images/icon/black.png'
      },
      {
        colorname: '紫',
        colorid: 8,
        coloricon: '/images/icon/purple.png'
      }],
    total: '',
    curNav: 1,
    curIndex: 0,
    imgBase: null,
    bannerList:[{
      title:"上衣",
      english:'T-SHIRT',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E4%B8%8A%E8%A1%A3.png?sign=4a9d3abf489eb87097c31fb24b7e42af&t=1594651828"
    },{
      title:"裤子",
      english:'TROUSERS',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E8%A3%A4%E5%AD%90.png?sign=9f6c557a548fd7af01f2b4e9c0952b04&t=1594651916"
    },{
      title:"裙装",
      english:'DRESS',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E8%A3%99%E5%AD%90.png?sign=35b17955267b356b4ae2c41d82afcf00&t=1594651929"
    }, {
      title:"鞋子",
      english:'SHOES',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E9%9E%8B%E5%AD%90.png?sign=4183532b612b1e0a0d9a671b09848f6a&t=1594652048"
    }, {
      title:"饰品",
      english:'ACCESSORES',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E9%A5%B0%E5%93%81.png?sign=7bb14e807eb91c0f39bc17b2068dd723&t=1594652024"
    },{
      title:"内衣",
      english:'UNOERWEAR',
      url:"https://7765-we-63574e-1258830969.tcb.qcloud.la/%E5%88%86%E7%B1%BB%E7%B4%A0%E6%9D%90/%E5%86%85%E8%A1%A3.png?sign=b3db8f4d6b0af843488f3fa050c4f6d9&t=1594651993"
    }
    
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  media: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 这个是为了将 图片转换为base64
        // console.log(res.tempFilePaths[0])
        var filePath = res.tempFilePaths[0]
        // console.log(filePath)
        const cloudPath = '000' + filePath.match(/\.[^.]+?$/)[0]

        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            wx.showToast({
              icon: 'none',
              title: '图片上传成功',
            })
            // console.log('[上传文件] 成功：', res)
            that.setData({
              cloudPath1: 'https://7765-we-63574e-1258830969.tcb.qcloud.la/' + cloudPath
            })
            // console.log(that.data.cloudPath1)
            that.urlTobase64(that.data.cloudPath1)

          }
        })

      },
    })
  },
  urlTobase64(url) {
    var that = this
    wx.showLoading({
      title: '图片信息获取中',
    })
    wx.request({
      url: url,
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer 
      success: res => {
        //把arraybuffer转成base64 
        let base64 = wx.arrayBufferToBase64(res.data);
        // 存图片的base64形式
        that.setData({
          imgBase: base64
        })
        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/image-classify/v1/body_attr',
          method: 'post',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: {
            image: that.data.imgBase,
            access_token: that.data.access_token
          },
          success: res => {
            // 你可以在这里实现你想要的功能,我这里只是简单的把 info(信息)存入全局data中而已
            wx.hideLoading()
            // console.log(res)
            var upper_color = res.data.person_info[0].attributes.upper_color.name

            wx.navigateTo({
              url: '../media/media?upper_color=' + upper_color
            })
          }
        })
      }
    })
  }, 
  // 图片提取操作
  lower: function (e) {
    var that = this;
    wx.cloud.callFunction({
      name: 'color',
      data: {
        a: '红'
      },
      success: res => {
        // console.log(res.result.data)
        var n = util.randomNum(that.data.total-1, 21)
        // console.log(n)
        var list = that.data.colorImage.concat(res.result.data[n[0]].url);
        var name = that.data.nameImage.concat(res.result.data[n[0]].name);
        for (var i = 1; i < 21; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          colorImage: list,
          nameImage: name
        })
// console.log(that.data.colorImage)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [database] 调用失败：', err)
      }
    })

  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      data: {
        grant_type: 'client_credentials',
        // 下面两个是百度api的id
        client_id: 'NK1fPDT9GAZk1FEKoM2pqNau',
        client_secret: '0V3h7e2KgTVxsG7s3meRfltZr0LvPVjc'
      },
      success: function (result) {
        // 这是为了获取百度api的调用令牌
        that.setData({
          access_token: result.data.access_token
        })
      }
    })
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    //初始化获取红色分类的图片
    var count;
    const db = wx.cloud.database();
    // db.collection('clothes').where({
    //   color: '红'
    // }).count({
    //   success(res) {
    //     count = res.total
    //     that.setData({
    //       total: res.total
    //     })
        console.log(count); 
    //   }
    // })
    wx.cloud.callFunction({
      name: 'color',
      data: {
        a: '红'
      },
      success: res => {
        // console.log(res.result.data)
        that.setData({
          total: res.result.data.length
        })
        var n = util.randomNum(res.result.data.length-1, 21)
        // console.log(n)
        var list = that.data.colorImage.concat(res.result.data[n[0]].url);
        var name = that.data.nameImage.concat(res.result.data[n[0]].name);
        for (var i = 1; i < 21; i++) {
          list = list.concat(res.result.data[n[i]].url)
          name = name.concat(res.result.data[n[i]].name)
        }
        that.setData({
          colorImage: list,
          nameImage: name
        })
        // console.log(that.data.colorImage)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [database] 调用失败：', err)
      }
    })

  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },//点击换分类右侧页面
  switchcolorbt: function (e) {
     console.log(this.data.colorbt[0].child)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        colortab: e.target.dataset.current
      })
      // console.log(that.data.colortab)

      var count;
      const db = wx.cloud.database();
      var color = that.data.colorName[that.data.colortab]
      
      wx.cloud.callFunction({
        name: 'color',
        data: {
          a: color
        },
        success: res => {

          that.data.colorImage = [];
          that.data.colorstyleImage = [];
          that.data.nameImage = [];
          var n = util.randomNum(res.result.data.length - 1, 21)
          // console.log(n)
          var list = that.data.colorImage.concat(res.result.data[n[0]].url);
          var color = that.data.colorstyleImage.concat(res.result.data[n[0]].style);
          var name = that.data.nameImage.concat(res.result.data[n[0]].name);
          for (var i = 1; i < n.length; i++) {
            list = list.concat(res.result.data[n[i]].url)
            color = color.concat(res.result.data[n[i]].style)
            name = name.concat(res.result.data[n[i]].name)
          }
          that.setData({
            colorImage: list,
            colorstyleImage: color,
            nameImage: name
          })
          // console.log(that.data.colorImage)
          // console.log(that.data.colorstyleImage)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '调用失败',
          })
          console.error('[云函数] [database] 调用失败：', err)
        }
      })
    }
  },//点击换颜色页面
  details: function (e) {
    var that = this;
    var url = JSON.stringify(that.data.colorImage);
    var src = e.target.dataset.src;
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: "../details/details?imageList=" + url + '&src=' + src + '&name=' + that.data.nameImage[index] + "&index="  + index
    })
  },
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  classifyclick:function(e) {
    console.log(e)
    var that = this;
    var name = e.currentTarget.dataset.name;
    // console.log (name)
    // console.log(that.data.curNav)
    wx.navigateTo({
      url: "../classifymore/classifymore?name=" + name + '&classify=' + that.data.cateItemsName[that.data.curNav-1]
    })
  },
  clickMore: function (e) {   //风格分类页面
    var id = e.target.dataset.id;
    // console.log(this.data.styleItems[id-1].cate_name)
    wx.navigateTo({
      url: '../stylemore/stylemore?id=' + this.data.styleItems[id - 1].cate_name
    })
  },
  clickPages:function(e) {
    wx.navigateTo({
      url: "../indexpages/indexpages?id=" + e.target.dataset.id
    })
  }
})
