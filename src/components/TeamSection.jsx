const teamMembers = [
  {
    name: 'Rahma Farahat',
    phone: '01111446852',
    email: 'Rahma1562@gamil.com',
    image: '/32d6f8da3e440e1c13d458667b40dd86058116b4.png',
  },
  {
    name: 'Alyaa',
    phone: '012008449871',
    email: 'Alyaa1456@gamil.com',
    image: '/8845184846d4fa15bea4766f4a91a9417ae70fc4.jpg',
  },
  {
    name: 'Aya Mahmoud',
    phone: '01062984510',
    email: 'Aya1025@gamil.com',
    image: '/bc90dfabb1488c739e7cf2d6e6238059cdc4e76f.png',
  },
  {
    name: 'Mostafa Abo Elmagd',
    phone: '01062984990',
    email: 'mostafa122@gamil.com',
    image: '/ffe915c90f6e3bf91653036f1ddbf8e9bd82d8bd.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="section team-section" id="team" aria-labelledby="team-title">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <p className="section-kicker">The people behind the work</p>
          <h2 className="section-title" id="team-title">Meet our team</h2>
          <p className="section-intro">
            A creative team working together to bring your ideas to life.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((person) => (
            <article className="team-card" key={person.name}>
              <img
                className="team-avatar"
                src={person.image}
                alt={'Portrait of ' + person.name}
                loading="lazy"
                decoding="async"
              />
              <div className="team-info">
                <h3>{person.name}</h3>
                <p className="team-role">UI Designer</p>
                <a href={'tel:' + person.phone}>{person.phone}</a>
                <a href={'mailto:' + person.email}>{person.email}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
