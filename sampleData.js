const { POSDataBuilder } = require("./dataBuilder.js");
const moment = require("moment/moment.js");

const order = {
  amount: 3400,
  bill_notes: "Thank you for Shopping with us",
  cancelled: false,
  cart_id: 1458321,
  checkout_fields: [
    {
      name: "Upload Picture",
      slug: "upload-picture",
      type: "IMAGE",
      value: null,
    },
    {
      name: "Prescription",
      slug: "prescription-1",
      type: "IMAGE",
      value: null,
    },
  ],
  coupon_code: "CODE35",
  coupon_discount: 120.9,
  coupon_id: 15341,
  created_at: "2023-02-18T08:11:56.000+0000",
  customer_id: 629026,
  deleted: false,
  delivered_on: "2023-02-18T08:14:00.000+0000",
  delivery_mode: "PICKUP",
  discount: 0,
  display_id: "ORD-0728",
  due_amount: 34,
  earn_points: 54,
  estimate: false,
  final_discount: 120.9,
  final_sale_price: 1088.1,
  fixed_discount: 0,
  guest_checkout: false,
  id: 835759,
  intra_state: false,
  invoice: false,
  invoice_date: "2023-02-18T08:11:56.000+0000",
  invoice_id: "DI20233670",
  invoice_location: "https://storage.googleapis.com/shy-in/9/2/DI20233670.pdf",
  last_payment_date: "2023-02-18T00:00:00.000+0000",
  mrp: 1269,
  notes: "sample text",
  online_order: true,
  order_address: {
    city: "Kolkata",
    country: null,
    created_at: "2023-02-18T08:24:11.000+0000",
    customer_id: 629026,
    customer_name: "Sudipta",
    id: 430794,
    lat: null,
    lng: null,
    mobile: "7278591612",
    pincode: "700001",
    state: "West Bengal",
    street1: "Kolkata ",
    street2: "",
    updated_at: "2023-02-18T08:24:11.000+0000",
  },
  order_discount: 0,
  order_items: [
    {
      cess: 0,
      cgst: 0,
      created_at: "2023-02-18T08:11:56.000+0000",
      display_name: "Happilo Premium Pumpkin Seeds - 200gm",
      extra_fields: [
        {
          ef_id: 593274,
          name: "Weight ",
          slug: "weight",
          type: "TEXT",
          val: "200gm",
        },
      ],
      fixed_discount: 0,
      id: 1915869,
      igst: 0,
      image:
        "https://storage.googleapis.com/shy-pub/275981/1670068159995_SKU-0050_0.jpg",
      measuring_unit: "pcs",
      mrp: 195,
      name: "Happilo Premium Pumpkin Seeds - 200gm",
      org_id: 9,
      pp_tax_included: false,
      purchase_price: 0,
      qty: 3,
      quantity: 3,
      sale_price: 175,
      sgst: 0,
      sku: "SKU-3889",
      sp_tax_included: true,
      store_id: 2,
      subscribed: false,
      tax: 0,
      total_tax_in_per: 0,
      updated_at: "2023-02-18T08:24:13.000+0000",
      utgst: 0,
      valid_mrp: 195,
    },
    {
      cess: 0,
      cgst: 0,
      created_at: "2023-02-18T08:11:56.000+0000",
      display_name: "Cadbury Bourn Vita - 500gm",
      extra_fields: [
        {
          ef_id: 577475,
          name: "Size",
          slug: "size",
          type: "TEXT",
          val: "500gm",
        },
      ],
      fixed_discount: 0,
      id: 1915870,
      igst: 0,
      image:
        "https://storage.googleapis.com/shy-pub/275981/1669980691012_SKU-0033_0.jpg",
      mrp: 228,
      name: "Cadbury Bourn Vita - 500gm",
      org_id: 9,
      pp_tax_included: false,
      purchase_price: 0,
      qty: 3,
      quantity: 3,
      sale_price: 228,
      sgst: 0,
      sku: "SKU-3872",
      sp_tax_included: true,
      store_id: 2,
      subscribed: false,
      tax: 0,
      total_tax_in_per: 0,
      updated_at: "2023-02-18T08:11:56.000+0000",
      utgst: 0,
      valid_mrp: 228,
    },
  ],
  org_customer_id: 497935,
  org_customer_mobile: "7278591612",
  org_customer_name: "Sudipta gupta",
  org_customer_type: "CONSUMER",
  org_id: 9,
  org_name: "The Mobile Corner",
  org_store_customer_id: 501521,
  packaging_charge: 0,
  payment_mode: "COD",
  payment_type: "CASH",
  purchase_order: false,
  redeem_points: 80,
  returned: false,
  round_value: 0,
  sale_price: 1209,
  sale_price_after_discocunt: 1088.1,
  sales_with_other_charges: 1209,
  savings: 120,
  shipping_charge: 0,
  state: "COMPLETE",
  status: "DELIVERED",
  store_id: 2,
  store_name: "Pizza What",
  sub_total: 230,
  tax_amount: 120,
  term: "PAID",
  tos: "",
  // "some text representing terms & conditions ",
  type: "ONLINE",
  updated_at: "2023-04-18T06:34:11.919+0000",
  user_id: 0,
  version: "V3",
  weight: 0,
};

const store = {
  ac_holder_name: "Indar Kriplani",
  ac_type: "SAVINGS",
  account_number: "000201656113",
  activate_at: null,
  attributes: null,
  bank_details: null,
  bank_name: "ICICI Bank",
  business_category: "general-store",
  business_name: "Shrimati Sarees Limited",
  business_type: "PARTNERSHIP",
  cin: null,
  city: "Bengaluru",
  created_at: "2019-12-19T11:30:56.000+0000",
  domain: "store.shoopy.in",
  email: "indar.kriplani@gmail.com",
  favicon: null,
  fssai_no: "",
  gstin: "233203203A23235",
  has_ssl: true,
  id: 2,
  ifsc_code: "ICIC0000002",
  invoice_template: "THERMAL_INVOICE_BLACK",
  large_image:
    "https://aftwhtbtmp.cloudimg.io/v7/aftwhtbtmp.cloudimg.io/v7/storage.googleapis.com/shy-pub/_static/cat-imgs/veg3.jpg",
  lat: 13.0603,
  lng: 77.6361,
  locality: "Narayanapuraa",
  logo: "https://storage.googleapis.com/shy-pub/9/1672332610702_IMG20221212121707.jpeg",
  name: "Shrimati Stores",
  org_id: 9,
  org_name: "The Mobile Corner",
  other_category: null,
  pages: null,
  pan: null,
  partner_slug: "",
  payment_mode: "COD",
  phone: "9910100819",
  pincode: "560077",
  plan: "BUSINESS",
  previous_domain: null,
  seo_setting: null,
  signature_url:
    "https://storage.googleapis.com/shy-pub/9/1675351708612_1654846276341signature.jpeg",
  slug: "shrimati",
  state: "Karnataka",
  status: "ACTIVE",
  status_reason: null,
  store_setting: {
    address_mode: "FORM_MAP",
    alternate_number: null,
    auto_verify: false,
    banner_url: null,
    card_type: "TWO_CARD",
    cart_note: "<p><strong>Cart Note</strong>Only delivered between 10-5</p>",
    closes_at: "8 PM",
    created_at: "2020-07-31T09:41:22.000+0000",
    delivery_ends_at: null,
    delivery_fee: 0,
    delivery_in_hrs: 0,
    delivery_mode: "DELIVERY_PICKUP",
    delivery_radius: 3000,
    delivery_starts_at: null,
    disable_pwa: false,
    font_family: "Proxima Nova",
    force_cod: null,
    free_shipping_above: 500,
    has_zones: false,
    id: 248,
    list_view: false,
    min_order: 0,
    notice: "Test@test.com",
    online_confirmed: false,
    online_payment_limit: null,
    opens_at: "1 PM",
    payment_mode: "COD_ONLINE",
    punch_line: "Creative Fashion Vista",
    return_accepted: false,
    select_location: false,
    select_pincode: false,
    show_negative_stock: false,
    show_price_wo_tax: true,
    show_sold_out: true,
    show_support_mobile: true,
    store_id: 2,
    support_mobile: "99999111100",
    theme: "basic",
    theme_color: "#F6740C",
    updated_at: "2023-02-18T08:33:57.000+0000",
    weekly_off: null,
  },
  street: "26/2, Narayanapuraa",
  street2: "Narayanapuraa",
  tc_acknowledged: false,
  thumbnail: null,
  updated_at: "2023-02-14T11:05:08.000+0000",
  upi_address: "8009551506@oksbi",
  verified: null,
  web_store_disabled: false,
};

// store related info fields
const store_name = store.business_name ? store.business_name : store.name;
const store_street = store.street ? store.street + ", " + store.street2 : "";
const store_city = store.city
  ? store.city + ", " + store.state + " - " + store.pincode
  : "";
const store_phone = store.phone ? "Phone : " + store.phone : "";
const store_email = store.email ? "<br>Email : " + store.email : "";
const store_pan = store.pan ? "<br>pan : " + store.pan : "";
const store_gstin = store.gstin ? "<br>GSTIN : " + store.gstin : "";
const store_fssai = store.fssai ? "<br>FSSAI licence No: " + store.fssai : "";

// customer related fields
const order_address = order.order_address;
const customer_mobile = order.org_customer_mobile
  ? [
      { type: "text", value: "Mobile", style: { "text-align": "left" } },
      {
        type: "text",
        value: order.org_customer_mobile,
        style: { "text-align": "right" },
      },
    ]
  : [];

const customer_street =
  order_address.street1 +
  (order_address.street2 ? ", " + order_address.street2 : "");

const customer_state = order_address.state
  ? order_address.state + " - " + order_address.pincode
  : order_address.pincode
  ? " - " + order_address.pincode
  : "";

const customer_address = order_address.street1
  ? [
      { type: "text", value: "Address", style: { "text-align": "left" } },
      {
        type: "text",
        value: customer_street + ", " + customer_state,
        style: { "text-align": "right" },
      },
    ]
  : [];

// amount related fields
const tax_amount = order.tax_amount
  ? [
      {
        type: "text",
        value: "Tax",
        style: { "text-align": "right", width: "60%" },
      },
      {
        type: "text",
        value: "₹" + order.tax_amount.toFixed(2),
        style: { "text-align": "right", "font-weight": "bold", width: "40%" },
      },
    ]
  : [];
const sub_total = [
  order.tax_amount
    ? {
        type: "text",
        value: "Taxable Amount",
        style: { "text-align": "right", width: "60%" },
      }
    : {
        type: "text",
        value: "Sub Total",
        style: { "text-align": "right", width: "60%" },
      },
  {
    type: "text",
    value: "₹" + order.sub_total.toFixed(2),
    style: { "text-align": "right", "font-weight": "bold", width: "40%" },
  },
];
const packaging_amount = order.packaging_amount
  ? [
      {
        type: "text",
        value: "Packaging",
        style: { "text-align": "right", width: "60%" },
      },
      {
        type: "text",
        value: "₹" + order.packaging_amount.toFixed(2),
        style: { "text-align": "right", "font-weight": "bold", width: "40%" },
      },
    ]
  : [];
const shipping_amount = order.shipping_amount
  ? [
      {
        type: "text",
        value: "Delivery",
        style: { "text-align": "right", width: "60%" },
      },
      {
        type: "text",
        value: "₹" + order.shipping_amount.toFixed(2),
        style: { "text-align": "right", "font-weight": "bold", width: "40%" },
      },
    ]
  : [];
const discount_amount = order.discount_amount
  ? [
      {
        type: "text",
        value: "Discount",
        style: { "text-align": "right", width: "60%" },
      },
      {
        type: "text",
        value: "₹" + order.discount_amount.toFixed(2),
        style: { "text-align": "right", "font-weight": "bold", width: "40%" },
      },
    ]
  : [];
const round_value = order.round_value
  ? [
      {
        type: "text",
        value: "Round Off",
        style: { "text-align": "right", width: "60%" },
      },
      {
        type: "text",
        value: "₹" + order.round_value.toFixed(2),
        style: { "text-align": "right", "font-weight": "bold", width: "40%" },
      },
    ]
  : [];
const total_payable = [
  {
    type: "text",
    value: "Total Payable",
    style: { "text-align": "right", width: "60%" },
  },
  {
    type: "text",
    value: "₹" + order.amount.toFixed(2),
    style: { "text-align": "right", width: "40%" },
  },
];
const received = [
  {
    type: "text",
    value: "Received",
    style: { "text-align": "right", width: "60%" },
  },
  {
    type: "text",
    value: "₹" + (order.amount - order.due_amount).toFixed(2),
    style: { "text-align": "right", width: "40%" },
  },
];
const balance = [
  {
    type: "text",
    value: "Balance",
    style: { "text-align": "right", width: "60%" },
  },
  {
    type: "text",
    value: "₹" + order.due_amount.toFixed(2),
    style: { "text-align": "right", width: "40%", "font-weight": "bold" },
  },
];

// wallet points
const earned_wallet_points = order.earn_points
  ? [
      {
        type: "text",
        value: "Earned Wallet Points",
        style: { "text-align": "left" },
      },
      {
        type: "text",
        value: order.earn_points,
        style: { "text-align": "right", "font-weight": "bold" },
      },
    ]
  : [];
const used_wallet_points = [
  {
    type: "text",
    value: "Used Wallet Points",
    style: { "text-align": "left" },
  },
  {
    type: "text",
    value: order.redeem_points,
    style: { "text-align": "right", "font-weight": "bold" },
  },
];
const wallet_points = order.redeem_points
  ? [used_wallet_points, earned_wallet_points]
  : earned_wallet_points;

// other info
const savings = order.savings
  ? "You have saved <br>" + "₹" + order.savings + " in this visit"
  : "";

const notes = order.notes ? "Notes : " + order.notes : "";

const qr_link =
  order.due_amount > 0 && store.upi_address ? QR_link(order, store) : "";
// console.log(qr_link);

const signature = store.signature_url ? store.signature_url : "";
const bill_notes = order.bill_notes ? order.bill_notes : "";
const disputes = store.city
  ? "<br> All Disputes will be settled in " + store.city
  : "<br> All Disputes will be handled locally";
const tos = order.tos ? order.tos : "Bill inclusive of tax" + disputes;

// invoice Id, order Id and customer details
const invoice_details = [
  [
    { type: "text", value: "Invoice #", style: { "text-align": "left" } },
    {
      type: "text",
      value: order.invoice_id,
      style: { "text-align": "right" },
    },
  ],
  [
    {
      type: "text",
      value: "Order #",
      style: { "text-align": "left", border: "none" },
    },
    {
      type: "text",
      value: order.display_id,
      style: { "text-align": "right", border: "none" },
    },
  ],
  [
    { type: "text", value: "Date", style: { "text-align": "left" } },
    {
      type: "text",
      value: moment(order.invoice_date).format("DD/MM/YYYY"),
      style: { "text-align": "right" },
    },
  ],
  [
    { type: "text", value: "Customer", style: { "text-align": "left" } },
    {
      type: "text",
      value: order.org_customer_name,
      style: { "text-align": "right" },
    },
  ],
  customer_mobile,
  customer_address,
];

const invoice_items_header = [
  { type: "text", value: "#" },
  {
    type: "text",
    value: "Product",
    style: { "text-align": "left" },
  },
  { type: "text", value: "Qty", style: { "text-align": "center" } },
  { type: "text", value: "Mrp", style: { "text-align": "center" } },
  { type: "text", value: "Price", style: { "text-align": "center" } },
  { type: "text", value: "Amt", style: { "text-align": "center" } },
];

const invoice_items = order.order_items.map((item, index) => {
  const table_item = [
    { type: "text", value: ++index },
    {
      type: "text",
      value: item.display_name,
      style: { "text-align": "left", "max-width": "75px" },
    },
    {
      type: "text",
      value: item.qty.toFixed(1),
      style: { "text-align": "center" },
    },
    {
      type: "text",
      value: item.mrp.toFixed(1),
      style: { "text-align": "center" },
    },
    {
      type: "text",
      value: item.sale_price.toFixed(1),
      style: { "text-align": "center" },
    },
    {
      type: "text",
      value: (item.sale_price * item.qty).toFixed(1),
      style: { "text-align": "center" },
    },
  ];
  return table_item;
});

const testData = POSDataBuilder.textLine(store_name, "14px", "center", "bold")
  .textLine(store_street + store_city)
  .textLine(store_phone + store_email + store_pan + store_gstin + store_fssai)
  .textLine("SALE INVOICE", "18px", "center", "bold")
  .table([], invoice_details)
  .table(invoice_items_header, invoice_items)
  .table(
    [],
    [
      sub_total,
      tax_amount,
      packaging_amount,
      shipping_amount,
      discount_amount,
      round_value,
      total_payable,
      received,
      balance,
    ]
  )
  .table([], wallet_points)
  .text(savings, {
    "text-align": "center",
    "font-weight": "bold",
    "border-top": "1px dashed black",
    "border-bottom": "1px dashed black",
    "padding-top": "2px",
    "padding-bottom": "2px",
  })
  // .QR(qr_link, 55, 55, {
  //   margin: "10 20px 20 20px",
  // })
  .image(signature, "right", "100px", "55px")
  .textLine("For " + store.name + "<br> (Signatory)", "12px", "center")
  .text(bill_notes, { margin: "4px", "text-align": "center" })
  .textLine("Terms and Conditions", "12px", "center", "bold")
  .textLine(tos, "12px", "center")
  .build();
console.log(JSON.stringify(testData));

//(order.due_amount>0 && store.upi_address)
function QR_link(order, store) {
  params = new URLSearchParams({
    pa: store.upi_address,
    pn: store.name,
    tn:
      "Against invoice " +
      order.invoice_id +
      ", on " +
      moment(order.created_at).format("DD/MM/YYYY HH:mm"),
    tr: order.invoice_id,
    am: order.due_amount,
    cu: "INR",
    purpose:
      "Against purchase on " +
      moment(order.created_at).format("DD/MM/YYYY HH:mm"),
  });
  const query = params.toString();
  const url = `upi://pay/?${query}`;
  return url;
}

const sampleData = [
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "SAMPLE HEADING",
    style: { fontWeight: "700", textAlign: "center", fontSize: "24px" },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
    value: "Secondary text",
    style: {
      textDecoration: "underline",
      fontSize: "10px",
      textAlign: "center",
      color: "red",
    },
  },
  {
    type: "barCode",
    value: "023456789010",
    height: 40, // height of barcode, applicable only to bar and QR codes
    width: 2, // width of barcode, applicable only to bar and QR codes
    displayValue: true, // Display value below barcode
    fontsize: 12,
  },
  {
    type: "qrCode",
    value: "https://github.com/Hubertformin/electron-pos-printer",
    height: 55,
    width: 55,
    style: { margin: "10 20px 20 20px" },
  },
  {
    type: "table",
    // style the table
    style: { border: "1px solid #ddd" },
    // list of the columns to be rendered in the table header
    tableHeader: ["Animal", "Age"],
    // multi dimensional array depicting the rows and columns of the table body
    tableBody: [
      ["Cat", 2],
      ["Dog", 4],
      ["Horse", 12],
      ["Pig", 4],
    ],
    // list of columns to be rendered in the table footer
    tableFooter: ["Animal", "Age"],
    // custom style for the table header
    tableHeaderStyle: { backgroundColor: "#000", color: "white" },
    // custom style for the table body
    tableBodyStyle: { border: "0.5px solid #ddd" },
    // custom style for the table footer
    tableFooterStyle: { backgroundColor: "#000", color: "white" },
  }
];
module.exports = { sampleData, testData };
