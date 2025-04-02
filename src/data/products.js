// Update the product images with Unsplash URLs
// Sample product data
export const products = [
  {
    id: "p1",
    name: "ক্লাসিক কটন ক্রু",
    nameEn: "Classic Cotton Crew",
    category: "basic",
    shortDescription: "প্রতিদিনের পোশাকের জন্য প্রিমিয়াম কটন আরাম",
    shortDescriptionEn: "Premium cotton comfort for everyday wear",
    description:
      "আমাদের ক্লাসিক কটন ক্রু যেকোনো মানসম্পন্ন পোশাকের ভিত্তি। ১০০% চিরুনি করা রিং-স্পান কটন দিয়ে তৈরি, এই টি-শার্ট অসাধারণ নরম এবং টেকসই। ক্লাসিক ফিট এবং শক্তিশালী সিম এটিকে ক্যাজুয়াল পোশাক এবং কাস্টম ব্র্যান্ডিং উভয়ের জন্য উপযুক্ত করে তোলে।",
    descriptionEn:
      "Our Classic Cotton Crew is the foundation of any quality wardrobe. Made from 100% combed ring-spun cotton, this t-shirt is exceptionally soft and durable. The classic fit and reinforced seams make it suitable for both casual wear and custom branding.",
    specifications: [
      "১০০% চিরুনি করা রিং-স্পান কটন",
      "১৮০ জিএসএম ফ্যাব্রিক ওজন",
      "সংকোচন কমাতে প্রি-শ্রাঙ্ক",
      "স্লিভ এবং নীচের হেমে ডাবল-নিডল সেলাই",
      "এস-৩এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% combed ring-spun cotton",
      "180 GSM fabric weight",
      "Pre-shrunk to minimize shrinkage",
      "Double-needle stitching at sleeves and bottom hem",
      "Available in sizes S-3XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    availableColors: [
      { name: "black", nameEn: "Black", nameBn: "কালো", hex: "#000000" },
      { name: "white", nameEn: "White", nameBn: "সাদা", hex: "#ffffff" },
      { name: "navy", nameEn: "Navy", nameBn: "নেভি", hex: "#003366" },
      { name: "gray", nameEn: "Gray", nameBn: "ধূসর", hex: "#808080" },
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p2",
    name: "প্রিমিয়াম পিমা ভি-নেক",
    nameEn: "Premium Pima V-Neck",
    category: "premium",
    shortDescription: "সুন্দর ভি-নেক ডিজাইনের সাথে বিলাসবহুল পিমা কটন",
    shortDescriptionEn: "Luxurious Pima cotton with elegant V-neck design",
    description:
      "আমাদের প্রিমিয়াম পিমা ভি-নেক টি-শার্ট দিয়ে আপনার সংগ্রহকে উন্নত করুন। অসাধারণ মান এবং চকচকে জন্য পরিচিত অত্যন্ত নরম পিমা কটন দিয়ে তৈরি। সমসাময়িক ভি-নেক ডিজাইন এবং টেইলার্ড ফিট এই শার্টকে যেকোনো ফ্যাশন লাইনের জন্য একটি বহুমুখী সংযোজন করে তোলে।",
    descriptionEn:
      "Elevate your collection with our Premium Pima V-Neck T-shirt. Made from ultra-soft Pima cotton known for its exceptional quality and luster. The contemporary V-neck design and tailored fit make this shirt a versatile addition to any fashion line.",
    specifications: [
      "১০০% পিমা কটন",
      "২০০ জিএসএম ফ্যাব্রিক ওজন",
      "শক্তিশালী ভি-নেক কলার",
      "আরও ভালো ফিটের জন্য সাইড-সিমড কনস্ট্রাকশন",
      "এস-২এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% Pima cotton",
      "200 GSM fabric weight",
      "Reinforced V-neck collar",
      "Side-seamed construction for better fit",
      "Available in sizes S-2XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "black", nameEn: "Black", nameBn: "কালো", hex: "#000000" },
      { name: "white", nameEn: "White", nameBn: "সাদা", hex: "#ffffff" },
      { name: "navy", nameEn: "Navy", nameBn: "নেভি", hex: "#003366" },
    ],
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p3",
    name: "অর্গানিক কটন টি-শার্ট",
    nameEn: "Organic Cotton T-Shirt",
    category: "eco",
    shortDescription: "জৈব উপাদান দিয়ে টেকসই ফ্যাশন",
    shortDescriptionEn: "Sustainable fashion with organic materials",
    description:
      "আমাদের অর্গানিক কটন টি-শার্ট পরিবেশ সচেতনতার সাথে মানসম্পন্ন কারিগরি একত্রিত করে। ১০০% সার্টিফাইড অর্গানিক কটন দিয়ে তৈরি, এই টি-শার্ট ক্ষতিকারক রাসায়নিক বা কীটনাশক ছাড়াই উৎপাদিত হয়। শ্বাস-প্রশ্বাসযোগ্য ফ্যাব্রিক এবং আরামদায়ক ফিট এটিকে সারাদিন পরার জন্য আরামদায়ক করে তোলে যখন টেকসই ফ্যাশন অনুশীলনকে সমর্থন করে।",
    descriptionEn:
      "Our Organic Cotton T-shirt combines quality craftsmanship with environmental consciousness. Made from 100% certified organic cotton, this t-shirt is produced without harmful chemicals or pesticides. The breathable fabric and comfortable fit make it ideal for all-day wear while supporting sustainable fashion practices.",
    specifications: [
      "১০০% জিওটিএস সার্টিফাইড অর্গানিক কটন",
      "১৭০ জিএসএম ফ্যাব্রিক ওজন",
      "রাসায়নিক-মুক্ত রঞ্জন প্রক্রিয়া",
      "সহজ রিব্র্যান্ডিংয়ের জন্য টিয়ার-অ্যাওয়ে লেবেল",
      "এক্সএস-২এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% GOTS certified organic cotton",
      "170 GSM fabric weight",
      "Chemical-free dyeing process",
      "Tear-away label for easy re-branding",
      "Available in sizes XS-2XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "natural", nameEn: "Natural", nameBn: "প্রাকৃতিক", hex: "#f5f5dc" },
      { name: "sage", nameEn: "Sage", nameBn: "স্যাজ", hex: "#bcb88a" },
      { name: "brown", nameEn: "Brown", nameBn: "বাদামী", hex: "#964b00" },
    ],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p4",
    name: "পারফরম্যান্স ব্লেন্ড টি-শার্ট",
    nameEn: "Performance Blend T-Shirt",
    category: "athletic",
    shortDescription: "সক্রিয় জীবনযাপনের জন্য আর্দ্রতা-শোষণকারী ফ্যাব্রিক",
    shortDescriptionEn: "Moisture-wicking fabric for active lifestyles",
    description:
      "পারফরম্যান্স ব্লেন্ড টি-শার্ট সক্রিয় গ্রাহকদের জন্য ব্র্যান্ডের জন্য ডিজাইন করা হয়েছে। এই হালকা টি-শার্টে আর্দ্রতা-শোষণকারী প্রযুক্তি রয়েছে যা শারীরিক কার্যকলাপের সময় পরিধানকারীদের শীতল এবং শুষ্ক রাখে। টেকসই পলি-কটন ব্লেন্ড বারবার ধোয়ার পরেও এর আকার এবং রং বজায় রাখে।",
    descriptionEn:
      "The Performance Blend T-shirt is designed for brands targeting active customers. This lightweight t-shirt features moisture-wicking technology that keeps wearers cool and dry during physical activities. The durable poly-cotton blend maintains its shape and color even after repeated washings.",
    specifications: [
      "৬০% কটন, ৪০% পলিয়েস্টার ব্লেন্ড",
      "১৬০ জিএসএম ফ্যাব্রিক ওজন",
      "আর্দ্রতা-শোষণকারী প্রযুক্তি",
      "ইউপিএফ ৩০+ সূর্য সুরক্ষা",
      "এস-৩এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "60% cotton, 40% polyester blend",
      "160 GSM fabric weight",
      "Moisture-wicking technology",
      "UPF 30+ sun protection",
      "Available in sizes S-3XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    availableColors: [
      { name: "black", nameEn: "Black", nameBn: "কালো", hex: "#000000" },
      { name: "navy", nameEn: "Navy", nameBn: "নেভি", hex: "#003366" },
      { name: "red", nameEn: "Red", nameBn: "লাল", hex: "#ff0000" },
      { name: "blue", nameEn: "Blue", nameBn: "নীল", hex: "#0000ff" },
    ],
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565693413579-8a400dd4e31e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p5",
    name: "ভিনটেজ ওয়াশ টি-শার্ট",
    nameEn: "Vintage Wash T-Shirt",
    category: "fashion",
    shortDescription: "সেই লিভড-ইন ভিনটেজ অনুভূতির জন্য প্রি-ওয়াশড",
    shortDescriptionEn: "Pre-washed for that lived-in vintage feel",
    description:
      "আমাদের ভিনটেজ ওয়াশ টি-শার্ট শুরু থেকেই একটি ভালভাবে পরিহিত প্রিয়ের আরাম অফার করে। প্রতিটি শার্ট সেই নিখুঁতভাবে ব্রোকেন-ইন লুক এবং অত্যন্ত নরম অনুভূতি অর্জন করতে একটি বিশেষ ধোয়ার প্রক্রিয়া অতিক্রম করে। সামান্য ফ্যাকাশে উপস্থিতি এবং আরামদায়ক ফিট এটিকে ফ্যাশন-ফরোয়ার্ড ব্র্যান্ডের জন্য আদর্শ করে তোলে।",
    descriptionEn:
      "Our Vintage Wash T-shirt offers the comfort of a well-worn favorite from the start. Each shirt undergoes a special washing process to achieve that perfectly broken-in look and ultra-soft feel. The slightly faded appearance and relaxed fit make it ideal for fashion-forward brands.",
    specifications: [
      "১০০% কটন",
      "১৭৫ জিএসএম ফ্যাব্রিক ওজন",
      "নরমতার জন্য এনজাইম-ওয়াশড",
      "ডাবল-নিডল টপস্টিচ সহ রিবড কলার",
      "এক্সএস-২এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% cotton",
      "175 GSM fabric weight",
      "Enzyme-washed for softness",
      "Ribbed collar with double-needle topstitch",
      "Available in sizes XS-2XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "faded-black", nameEn: "Faded Black", nameBn: "ফ্যাকাশে কালো", hex: "#333333" },
      { name: "faded-blue", nameEn: "Faded Blue", nameBn: "ফ্যাকাশে নীল", hex: "#6699cc" },
      { name: "faded-green", nameEn: "Faded Green", nameBn: "ফ্যাকাশে সবুজ", hex: "#669966" },
    ],
    images: [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p6",
    name: "হেভিওয়েট কটন টি-শার্ট",
    nameEn: "Heavyweight Cotton T-Shirt",
    category: "premium",
    shortDescription: "প্রিমিয়াম অনুভূতির জন্য উল্লেখযোগ্য ফ্যাব্রিক ওজন",
    shortDescriptionEn: "Substantial fabric weight for a premium feel",
    description:
      "হেভিওয়েট কটন টি-শার্ট এমন ব্র্যান্ডের জন্য ডিজাইন করা হয়েছে যারা মান এবং স্থায়িত্বকে অগ্রাধিকার দেয়। পুরু, উচ্চ-মানের কটন দিয়ে তৈরি, এই টি-শার্টের একটি উল্লেখযোগ্য অনুভূতি রয়েছে যা প্রিমিয়াম মূল্য প্রকাশ করে। শক্তিশালী নির্মাণ নিশ্চিত করে যে এটি ব্যাপক পরিধান এবং ধোয়ার পরেও এর আকার এবং কাঠামো বজায় রাখে।",
    descriptionEn:
      "The Heavyweight Cotton T-Shirt is designed for brands that prioritize quality and durability. Made from thick, high-quality cotton, this t-shirt has a substantial feel that conveys premium value. The robust construction ensures it maintains its shape and structure even after extensive wear and washing.",
    specifications: [
      "১০০% চিরুনি করা রিং-স্পান কটন",
      "২২০ জিএসএম ফ্যাব্রিক ওজন",
      "কাঁধ-থেকে-কাঁধ টেপিং",
      "সর্বত্র ডাবল-নিডল সেলাই",
      "এস-৩এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% combed ring-spun cotton",
      "220 GSM fabric weight",
      "Shoulder-to-shoulder taping",
      "Double-needle stitching throughout",
      "Available in sizes S-3XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    availableColors: [
      { name: "black", nameEn: "Black", nameBn: "কালো", hex: "#000000" },
      { name: "white", nameEn: "White", nameBn: "সাদা", hex: "#ffffff" },
      { name: "charcoal", nameEn: "Charcoal", nameBn: "চারকোল", hex: "#36454f" },
      { name: "olive", nameEn: "Olive", nameBn: "অলিভ", hex: "#556b2f" },
    ],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p7",
    name: "লং স্লিভ বেসিক",
    nameEn: "Long Sleeve Basic",
    category: "basic",
    shortDescription: "ঠান্ডা আবহাওয়ার জন্য ক্লাসিক লং স্লিভ ডিজাইন",
    shortDescriptionEn: "Classic long sleeve design for cooler weather",
    description:
      "আমাদের লং স্লিভ বেসিক ঠান্ডা আবহাওয়ার জন্য অতিরিক্ত কভারেজ সহ আমাদের ক্লাসিক টি-শার্টের একই মান অফার করে। নরম কটন ফ্যাব্রিক এবং আরামদায়ক ফিট এটিকে লেয়ারিং বা নিজের পরার জন্য একটি আরামদায়ক পছন্দ করে তোলে। রিবড কাফ এবং শক্তিশালী সিম স্থায়িত্ব এবং আকার ধরে রাখা নিশ্চিত করে।",
    descriptionEn:
      "Our Long Sleeve Basic offers the same quality as our classic t-shirts with added coverage for cooler weather. The soft cotton fabric and comfortable fit make it a cozy choice for layering or wearing on its own. Ribbed cuffs and reinforced seams ensure durability and shape retention.",
    specifications: [
      "১০০% চিরুনি করা রিং-স্পান কটন",
      "১৮০ জিএসএম ফ্যাব্রিক ওজন",
      "রিবড কাফ",
      "টেপড নেক এবং শোল্ডার",
      "এস-২এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "100% combed ring-spun cotton",
      "180 GSM fabric weight",
      "Ribbed cuffs",
      "Taped neck and shoulders",
      "Available in sizes S-2XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "black", nameEn: "Black", nameBn: "কালো", hex: "#000000" },
      { name: "white", nameEn: "White", nameBn: "সাদা", hex: "#ffffff" },
      { name: "gray", nameEn: "Gray", nameBn: "ধূসর", hex: "#808080" },
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "p8",
    name: "ট্রাই-ব্লেন্ড সফট টি-শার্ট",
    nameEn: "Tri-Blend Soft T-Shirt",
    category: "premium",
    shortDescription: "অসাধারণ আরামের জন্য অত্যন্ত নরম ট্রাই-ব্লেন্ড ফ্যাব্রিক",
    shortDescriptionEn: "Ultra-soft tri-blend fabric for exceptional comfort",
    description:
      "ট্রাই-ব্লেন্ড সফট টি-শার্ট এর অনন্য ফ্যাব্রিক কম্পোজিশনের সাথে অতুলনীয় আরাম অফার করে। কটন, পলিয়েস্টার এবং রেয়নের মিশ্রণ অবিশ্বাস্যভাবে নরম টেক্সচার তৈরি করে যার চমৎকার ড্রেপ রয়েছে। এই হালকা টি-শার্টের একটি আধুনিক, ফিটেড সিলুয়েট রয়েছে যা বিভিন্ন শরীরের ধরনকে মানানসই করে।",
    descriptionEn:
      "The Tri-Blend Soft T-Shirt offers unparalleled comfort with its unique fabric composition. The blend of cotton, polyester, and rayon creates an incredibly soft texture with excellent drape. This lightweight t-shirt features a modern, fitted silhouette that flatters a variety of body types.",
    specifications: [
      "৫০% কটন, ২৫% পলিয়েস্টার, ২৫% রেয়ন",
      "১৫০ জিএসএম ফ্যাব্রিক ওজন",
      "ভিনটেজ-সফট ফিল",
      "আধুনিক ফিটেড কাট",
      "এক্সএস-২এক্সএল সাইজে উপলব্ধ",
    ],
    specificationsEn: [
      "50% cotton, 25% polyester, 25% rayon",
      "150 GSM fabric weight",
      "Vintage-soft feel",
      "Modern fitted cut",
      "Available in sizes XS-2XL",
    ],
    wholesalePrices: [
      { range: "১২-৫০ পিস", price: "Wholesale 1", priceBn: "পাইকারি ১", rangeEn: "12-50 pcs" },
      { range: "৫১-১০০ পিস", price: "Wholesale 2", priceBn: "পাইকারি ২", rangeEn: "51-100 pcs" },
      { range: "১০০+ পিস", price: "Wholesale 3", priceBn: "পাইকারি ৩", rangeEn: "100+ pcs" },
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "2XL"],
    availableColors: [
      { name: "heather-gray", nameEn: "Heather Gray", nameBn: "হেদার গ্রে", hex: "#aaaaaa" },
      { name: "heather-blue", nameEn: "Heather Blue", nameBn: "হেদার ব্লু", hex: "#6699cc" },
      { name: "heather-green", nameEn: "Heather Green", nameBn: "হেদার গ্রিন", hex: "#669966" },
      { name: "heather-purple", nameEn: "Heather Purple", nameBn: "হেদার পার্পল", hex: "#9966cc" },
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
]

// Featured products (subset of all products)
export const featuredProducts = [
  products[1], // প্রিমিয়াম পিমা ভি-নেক / Premium Pima V-Neck
  products[4], // ভিনটেজ ওয়াশ টি-শার্ট / Vintage Wash Tee
  products[7], // ট্রাই-ব্লেন্ড সফট টি-শার্ট / Tri-Blend Soft Tee
  products[2], // অর্গানিক কটন টি-শার্ট / Organic Cotton Tee
]

