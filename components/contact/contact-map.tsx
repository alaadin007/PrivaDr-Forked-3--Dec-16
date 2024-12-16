export function ContactMap() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Visit Our Clinic</h2>
          <p className="text-muted-foreground">
            Located in the heart of London's medical district
          </p>
        </div>
        
        <div className="aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4790951351987!2d-0.1471270230769231!3d51.51921097948718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3c9a4e8e7%3A0x8c39ec9df28d5c89!2sHarley%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1706840000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}