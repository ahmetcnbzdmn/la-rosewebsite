import os
import glob
import re

# Base directory for the products
base_dir = "/Users/bahribirer/Desktop/roseweb/la-rosewebsite/src/views/products"
search_pattern = os.path.join(base_dir, "*.vue")

# Dictionary of English phrases to original phrasing in French to Turkish translations
replacements = {
    # Buttons & CTAs
    r"Purchase in pharmacy": "Eczaneden Satın Alın",
    r"Add to cart": "Sepete Ekle",
    r"Out of stock": "Stokta Yok",
    r"Add<span>•</span><p": "Sepete Ekle<span>•</span><p",
    r"Add<span": "Sepete Ekle<span",
    
    # Reviews block
    r"Your feedback is precious!": "Görüşleriniz bizim için değerli!",
    r"All reviews": "Tüm değerlendirmeler",
    r"Discover the reviews of our customers for our": "Müşterilerimizin şu ürünümüz hakkındaki değerlendirmelerini keşfedin:",
    
    # Reassurances & Info
    r"In stock \\u2022 Delivery within 3 to 5 days": "Stokta • 3 ile 5 iş günü içerisinde teslim",
    r"In stock • Delivery within 3 to 5 days": "Stokta • 3 ile 5 iş günü içerisinde teslim",
    r"1 free sample on request with every order": "Her siparişte talep üzerine 1 ücretsiz deneme boyu",
    r"1 free sample": "1 ücretsiz deneme boyu",
    r"on request with every order": "her siparişte talep üzerine",
    r"Free shipping": "Ücretsiz Kargo",
    r"on orders over 25 €": "25 € ve üzeri siparişlerde",
    r"on orders over 25€": "25 € ve üzeri siparişlerde",
    
    # FAQ Section
    r"Your frequently asked questions": "Sıkça Sorulan Sorular",
    r"Search the FAQ": "Sıkça sorulan sorularda ara",
    r"A little doubt\\?": "Hala şüpheleriniz mi var?",
    r"Ask us!": "Bize sorun!",
    
    # Newsletter Section
    r"Sign up for our newsletter!": "Bültenimize kaydolun!",
    r"Receive a 10% discount when you sign up\\. Stay on top of exclusive previews, our best tips, and special offers just for you!": "Kayıt olduğunuzda %10 indirim kazanın. Özel ön gösterimler, en iyi ipuçlarımız ve size özel tekliflerden haberdar olun!",
    r"What topics interest you\\?": "Hangi konular ilginizi çekiyor?",
    r"When is your birthday\\?": "Doğum gününüz ne zaman?",
    r"We’ve got a little surprise planned for you on that day!": "O gün için size küçük bir sürprizimiz var!",
    r"Birthday \\(DD/MM/YYYY\\)": "Doğum Tarihi (GG/AA/YYYY)",
    r"Submit": "Gönder",
    r"I agree to subscribe to the La Rosée Cosmétiques newsletter to receive information about its products and new products\\. I am informed that I can unsubscribe at any time using the unsubscribe link included in the newsletter\\.": "La Rosée Cosmétiques bültenine abone olmayı, ürünler ve yeni ürünler hakkında bilgi almayı kabul ediyorum. Bültende yer alan abonelikten çıkma bağlantısını kullanarak dilediğim zaman abonelikten çıkabileceğimi biliyorum.",
    r"Rights and data management": "Haklar ve veri yönetimi",
    
    # Footer / Follow Us
    r"Follow us": "Bizi takip edin",
    r"Our associated products": "Öneri Ürünler",
    r"Partner pharmacies": "Partner Eczaneler",
    r"find one near you": "size en yakın eczaneyi bulun",
    
    # Product Information
    r"Have a question\\?": "Sorunuz mu var?",
    r"contact us": "bize ulaşın"
}

def translate_files():
    files = glob.glob(search_pattern)
    modified_count = 0
    
    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            
        original_content = content
        
        for eng, turk in replacements.items():
            content = re.sub(eng, turk, content)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            modified_count += 1
            
    print(f"Successfully processed {len(files)} files.")
    print(f"Modified {modified_count} files with translations.")

if __name__ == "__main__":
    translate_files()
