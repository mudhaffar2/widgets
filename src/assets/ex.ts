let StoreState = {
  "design": { // ---------------------------------->>>> widget design: widget, slots, OSR and ADS Tabs
    "renderHTML": true,
    "listStyle": "template0",
    "render": { // ---------------------------------->>>> contains widget, OSR and ADS Tabs
      "target": { // ---------------------------------->>>> widget Tab setting
        "headline": {
          "label": "Headline",
          "text": "Headline"
        },
        "list": {},
        "powered": {
          "label": "Powered",
          "position": "footer",
          "color": "AAAAAA",
          "text": "powered_text",
          "url": "powered_url"
        },
        "oba": {
          "label": "OBA",
          "color": "AAAAAA",
          "position": "right"
        },
        "advertise": {
          "label": "Advertise",
          "parent": "footer",
          "text": "advertise_text",
          "url": "advertise_alt_url"
        }
      },
      "default": { // ---------------------------------->>>> OSR Tab
        "image": {
          "label": "Image",
          "width": 320,
          "height": 240,
          "crop": true,
          "parent": "parent",
          "default": "default_image_url"
        },
        "kicker": {
          "label": "Kicker",
          "length": 50,
          "ellipsis": true,
          "split": true,
          "parent": "parent",
          "default": "default_text",
          "suffix": "suffix",
          "prefix": "prefix",
          "line": 1
        },
        "category": {
          "label": "Category",
          "length": 50,
          "ellipsis": true,
          "split": true,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "line": 1,
          "parent": "parent"
        },
        "title": {
          "label": "Title",
          "length": 70,
          "ellipsis": true,
          "split": true,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "line": 1,
          "parent": "parent"
        },
        "text": {
          "label": "Text",
          "length": 50,
          "ellipsis": true,
          "split": true,
          "default": "default_text",
          "line": 1,
          "prefix": "prefix",
          "suffix": "suffix",
          "parent": "parent",
          "more": "more_text"
        },
        "brand": {
          "label": "Brand",
          "length": 50,
          "ellipsis": true,
          "split": true,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "parent": "parent"
        },
        "date": {
          "label": "Date",
          "format": "format",
          "diff": true,
          "parent": "parent",
          "interval": {}
        }
      },
      "pet": { // ---------------------------------->>>> ADS Tab
        "image": {
          "label": "Image/Video",
          "width": 320,
          "height": 240,
          "crop": true,
          "maxWidth": 580,
          "autoClose": false,
          "mode": "widget",
          "engage": "auto",
          "parent": "parent",
          "playButton": "alt_button_url"
        },
        "brand": {
          "label": "Brand",
          "landingpage": false,
          "length": 40,
          "ellipsis": false,
          "split": true,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "parent": "parent"
        },
        "title": {
          "label": "Title",
          "length": 70,
          "ellipsis": true,
          "split": true,
          "line": 1,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "parent": "parent"
        },
        "text": {
          "label": "Text",
          "length": 50,
          "ellipsis": true,
          "split": true,
          "line": 1,
          "prefix": "prefix",
          "suffix": "suffix",
          "default": "default_text",
          "parent": "parent",
          "more": "more_text"
        },
        "adhint": {
          "color": "AAAAAA",
          "type": "text", // ---------------------------------->>>> should be omitted if adhint is not text
          "multiple": false,
          "ad": "ad_text",
          "pcd": "pcd_text",
          "parent": "parent"
        }
      }
    },
    "slots": [ // ---------------------------------->>>> slots Tab
      {
        "preferences": [
          {
            "type": "pet",
            "condition": {
              "adblocker": "none",
              "geo_user": "geo",
              "device_type": "device_type",
              "os": "operating_system",
              "browser": "browser",
              "category": "category"
            },
            "transparency": 1
          },
          {
            "type": "default",
            "transparency": 1
          }
        ]
      },
      {
        "preferences": [
          {
            "type": "pet",
            "condition": {},
            "transparency": 1
          }
        ]
      },
      {
        "preferences": [
          {
            "type": "default",
            "transparency": 1
          }
        ]
      }
    ]
  },
  "domainid": 1025779, // ---------------------------------->>>> domainid
  "files": { // ---------------------------------->>>> basic settings Tab: layout css script, structure css script + custom css script, widget script
    "custom.css": "custom_css_script",
    "layout.css": "layout_template_script",
    "structure.css": "structure_template_script",
    "widgetScript.js": "widget_script"
  },
  "formats": 1, // ---------------------------------->>>> ****
  "hasVideo": true, // ---------------------------------->>>> ****
  "height": 0, // ---------------------------------->>>> ****
  "width": 0, // ---------------------------------->>>> ****
  "id": 953136, // ---------------------------------->>>> widgetid
  "kind": "list", // ---------------------------------->>>> ****
  "lang": "de", // ---------------------------------->>>> basic settings Tab: languages (by code)
  "options": { // ---------------------------------->>>> basic settings Tab
    "comment": "comment",
    "hardFloor": 123,
    "styleTemplates": { // ---------------------------------->>>> basic settings Tab: layout and structure templates names only ****
      "layout.css": "Layout - Block 2",
      "structure.css": "Structure 3 - ( BLOCK - Adhint below Image )"
    },
    "layout": "Block2", // ---------------------------------->>>> basic settings: layout metadata
    "elements": "Title Only", // ---------------------------------->>>> basic settings: elements metadata
    "getitems": "Push", // ---------------------------------->>>> basic settings: getitems metadata
    "integration": "Full", // ---------------------------------->>>> basic settings: integration metadata
    "alias": "alias",
    "context_filter": "context",
    "priority": "belowArticle_1,belowArticle_2",
    "rewriteAMP": "url_rewrite",
    "redirectParam": "redirect_param",
    "hidden": null, // ---------------------------------->>>> basic settings: hidden (values: null or 1)
    "baseTemplate": "list.css", // ---------------------------------->>>> ****
    "createdByTool": "platform-api", // ---------------------------------->>>> ****
    "toolVersion": 2, // ---------------------------------->>>> ****
    "flagPermissions": { // ---------------------------------->>>> ****
      "deny": [],
      "allow": []
    },
    "isActive": 0, // ---------------------------------->>>> ****
    "use_sid": 1 // ---------------------------------->>>> widgets list: widget options -> use sid (values: false or 1)
  },
  "permissions": [ // ---------------------------------->>>> rich media formats + ****
    "AD", // ---------------------------------->>>> ****
    "VIDEO_AD", // ---------------------------------->>>> ADS Tab: rich media formats -> videoads
    "ACTION_AD", // ---------------------------------->>>> ADS Tab: rich media formats -> actionads
    "PCD" // ---------------------------------->>>> ****
  ],
  "status": 1, // ---------------------------------->>>> widgets list: widget options -> status (values: 0 or 1)
  "title": "belowArticle", // ---------------------------------->>>> basic settings Tab: name
  "type": "predefined" // ---------------------------------->>>> ****
};

let newDomainsGetPostURL = 'https://api.plista.com:443/de/domains/[domainid]';
let newWidgetsGetPostURL = 'https://api.plista.com:443/de/widgets/[widgetid]';
let publisherWidgetsGetPutURL = 'https://api.plista.com:2443/publisher/[domainid]/widget/[widget_name]';
let oldWidgetsGetPutURL = 'https://api.plista.com:2443/widget/[widgetid]';