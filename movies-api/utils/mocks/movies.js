const moviesMock = [
  { id: '5dc08c93c07b9e2ba861c4a2', title: 'Foreign Student', year: 1984, cover: 'http://dummyimage.com/220x152.png/ff4444/ffffff', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', duration: 1932, contentRating: 'PG', source: 'http://state.tx.us/sed/accumsan/felis.json?fusce=nec&consequat=nisi&nulla=vulputate&nisl=nonummy&nunc=maecenas&nisl=tincidunt&duis=lacus&bibendum=at&felis=velit&sed=vivamus&interdum=vel&venenatis=nulla&turpis=eget&enim=eros&blandit=elementum&mi=pellentesque&in=quisque&porttitor=porta&pede=volutpat&justo=erat&eu=quisque&massa=erat&donec=eros&dapibus=viverra&duis=eget&at=congue', tags: ['Drama|War', 'Horror|Sci-Fi|Thriller'] },
  { id: '155f1720-37dc-47c9-93de-8b756ee92ab5', title: 'Tears of Steel', year: 2005, cover: 'http://dummyimage.com/166x232.png/ff4444/ffffff', description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', duration: 2027, contentRating: 'PG', source: 'http://mac.com/lorem/id/ligula/suspendisse/ornare/consequat.json?tortor=nisi&sollicitudin=venenatis&mi=tristique&sit=fusce&amet=congue&lobortis=diam&sapien=id&sapien=ornare', tags: ['Comedy', 'Horror|Sci-Fi', 'Animation|Comedy', 'Horror'] },
  { id: '64e37230-c7b9-456f-965e-3ea9063bc8ff', title: 'Beautician and the Beast, The', year: 1985, cover: 'http://dummyimage.com/129x160.jpg/ff4444/ffffff', description: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', duration: 2010, contentRating: 'PG', source: 'https://xrea.com/vel/augue/vestibulum/ante.png?pede=neque&posuere=duis&nonummy=bibendum&integer=morbi&non=non&velit=quam&donec=nec&diam=dui&neque=luctus&vestibulum=rutrum&eget=nulla&vulputate=tellus&ut=in&ultrices=sagittis&vel=dui&augue=vel&vestibulum=nisl&ante=duis&ipsum=ac&primis=nibh&in=fusce&faucibus=lacus&orci=purus&luctus=aliquet&et=at&ultrices=feugiat&posuere=non&cubilia=pretium&curae=quis&donec=lectus&pharetra=suspendisse&magna=potenti&vestibulum=in', tags: ['(no genres listed)', 'Drama|Romance', 'Crime|Drama|Thriller', 'Sci-Fi|Western'] },
  { id: '0baaa12d-20e6-43cf-a2f0-d1df1768413c', title: 'Under the North Star (Täällä Pohjantähden alla)', year: 2009, cover: 'http://dummyimage.com/156x147.bmp/ff4444/ffffff', description: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', duration: 2069, contentRating: 'R', source: 'https://google.pl/congue/risus/semper/porta/volutpat/quam/pede.js?id=bibendum&luctus=felis&nec=sed&molestie=interdum&sed=venenatis&justo=turpis&pellentesque=enim&viverra=blandit&pede=mi&ac=in&diam=porttitor&cras=pede&pellentesque=justo&volutpat=eu&dui=massa&maecenas=donec&tristique=dapibus&est=duis&et=at&tempus=velit&semper=eu&est=est&quam=congue&pharetra=elementum&magna=in&ac=hac&consequat=habitasse&metus=platea&sapien=dictumst&ut=morbi&nunc=vestibulum&vestibulum=velit&ante=id&ipsum=pretium&primis=iaculis&in=diam&faucibus=erat&orci=fermentum&luctus=justo&et=nec&ultrices=condimentum&posuere=neque&cubilia=sapien&curae=placerat&mauris=ante&viverra=nulla&diam=justo&vitae=aliquam&quam=quis&suspendisse=turpis&potenti=eget&nullam=elit&porttitor=sodales&lacus=scelerisque&at=mauris&turpis=sit&donec=amet&posuere=eros&metus=suspendisse&vitae=accumsan&ipsum=tortor&aliquam=quis&non=turpis&mauris=sed', tags: ['Thriller', 'Crime|Drama|Thriller', 'Drama|Romance', 'Action|Drama|Thriller'] },
  { id: 'beec16be-59a7-41a5-b5a7-8cd23a136538', title: 'No habrá paz para los malvados', year: 2006, cover: 'http://dummyimage.com/150x247.bmp/5fa2dd/ffffff', description: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', duration: 1953, contentRating: 'R', source: 'http://epa.gov/scelerisque/quam/turpis/adipiscing/lorem/vitae/mattis.xml?in=potenti&est=cras&risus=in&auctor=purus&sed=eu&tristique=magna&in=vulputate&tempus=luctus&sit=cum&amet=sociis&sem=natoque&fusce=penatibus&consequat=et&nulla=magnis&nisl=dis&nunc=parturient&nisl=montes&duis=nascetur&bibendum=ridiculus&felis=mus&sed=vivamus&interdum=vestibulum&venenatis=sagittis&turpis=sapien&enim=cum&blandit=sociis&mi=natoque&in=penatibus&porttitor=et&pede=magnis&justo=dis&eu=parturient&massa=montes&donec=nascetur&dapibus=ridiculus&duis=mus&at=etiam&velit=vel&eu=augue&est=vestibulum&congue=rutrum&elementum=rutrum&in=neque&hac=aenean&habitasse=auctor&platea=gravida&dictumst=sem&morbi=praesent&vestibulum=id&velit=massa&id=id&pretium=nisl&iaculis=venenatis&diam=lacinia&erat=aenean&fermentum=sit&justo=amet&nec=justo&condimentum=morbi&neque=ut&sapien=odio&placerat=cras&ante=mi&nulla=pede&justo=malesuada&aliquam=in&quis=imperdiet&turpis=et&eget=commodo&elit=vulputate&sodales=justo&scelerisque=in&mauris=blandit&sit=ultrices&amet=enim&eros=lorem&suspendisse=ipsum&accumsan=dolor&tortor=sit', tags: ['Adventure|Comedy|Romance|War', 'Documentary', 'Comedy|Fantasy', 'Documentary'] },
  { id: 'de2a7c58-31b3-41f6-9db8-851e61585ab0', title: 'All Quiet on the Western Front', year: 2007, cover: 'http://dummyimage.com/135x100.png/ff4444/ffffff', description: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', duration: 1947, contentRating: 'G', source: 'http://nsw.gov.au/ac/diam/cras/pellentesque/volutpat.html?consectetuer=lorem&adipiscing=vitae&elit=mattis&proin=nibh&interdum=ligula&mauris=nec&non=sem&ligula=duis&pellentesque=aliquam&ultrices=convallis&phasellus=nunc&id=proin&sapien=at&in=turpis&sapien=a&iaculis=pede&congue=posuere&vivamus=nonummy&metus=integer&arcu=non&adipiscing=velit&molestie=donec&hendrerit=diam&at=neque&vulputate=vestibulum&vitae=eget&nisl=vulputate&aenean=ut&lectus=ultrices&pellentesque=vel&eget=augue&nunc=vestibulum&donec=ante&quis=ipsum&orci=primis&eget=in&orci=faucibus&vehicula=orci&condimentum=luctus', tags: ['Adventure|Comedy|War', 'Thriller', 'Drama'] },
  { id: 'd5a36f4d-4200-4a41-9bb4-09d07b2b0e6d', title: 'Hungry Hill', year: 2010, cover: 'http://dummyimage.com/134x176.jpg/5fa2dd/ffffff', description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', duration: 1944, contentRating: 'R', source: 'https://omniture.com/nulla/ultrices/aliquet/maecenas.aspx?tincidunt=vel&lacus=sem&at=sed&velit=sagittis&vivamus=nam&vel=congue&nulla=risus&eget=semper&eros=porta&elementum=volutpat&pellentesque=quam&quisque=pede&porta=lobortis&volutpat=ligula&erat=sit&quisque=amet&erat=eleifend&eros=pede&viverra=libero&eget=quis&congue=orci&eget=nullam&semper=molestie&rutrum=nibh&nulla=in&nunc=lectus&purus=pellentesque&phasellus=at&in=nulla&felis=suspendisse', tags: ['Comedy|Fantasy', 'Drama'] },
  { id: 'c8c01c21-1ab9-49e7-b748-0c5b5b1f9d13', title: "Midsummer Night's Dream, A", year: 1996, cover: 'http://dummyimage.com/196x173.png/5fa2dd/ffffff', description: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', duration: 2056, contentRating: 'G', source: 'http://alexa.com/ipsum/primis/in/faucibus/orci.jsp?mi=ante&integer=vivamus&ac=tortor&neque=duis&duis=mattis&bibendum=egestas&morbi=metus&non=aenean&quam=fermentum&nec=donec&dui=ut&luctus=mauris&rutrum=eget&nulla=massa&tellus=tempor&in=convallis&sagittis=nulla&dui=neque&vel=libero&nisl=convallis&duis=eget&ac=eleifend&nibh=luctus&fusce=ultricies&lacus=eu', tags: ['Drama', 'Drama', 'Drama'] },
  { id: '2ced62f5-839b-49c1-9e53-c05e3086c20a', title: 'Moon of the Wolf', year: 1998, cover: 'http://dummyimage.com/196x137.png/5fa2dd/ffffff', description: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', duration: 1971, contentRating: 'PG-13', source: 'http://surveymonkey.com/facilisi/cras/non/velit/nec/nisi.png?at=lobortis&nulla=sapien&suspendisse=sapien&potenti=non&cras=mi&in=integer&purus=ac&eu=neque&magna=duis&vulputate=bibendum&luctus=morbi&cum=non', tags: ['Drama', 'Adventure|Animation|Drama', 'Drama'] },
  { id: '10bf0f08-736f-4bca-afcb-c7d2dcc81018', title: 'Threads', year: 1989, cover: 'http://dummyimage.com/205x197.bmp/ff4444/ffffff', description: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', duration: 1888, contentRating: 'G', source: 'https://myspace.com/sem/sed/sagittis/nam/congue.json?vulputate=commodo&elementum=vulputate&nullam=justo&varius=in&nulla=blandit&facilisi=ultrices&cras=enim&non=lorem&velit=ipsum&nec=dolor&nisi=sit&vulputate=amet&nonummy=consectetuer&maecenas=adipiscing&tincidunt=elit&lacus=proin&at=interdum&velit=mauris&vivamus=non&vel=ligula&nulla=pellentesque&eget=ultrices&eros=phasellus&elementum=id&pellentesque=sapien&quisque=in&porta=sapien&volutpat=iaculis&erat=congue&quisque=vivamus&erat=metus&eros=arcu&viverra=adipiscing&eget=molestie&congue=hendrerit&eget=at&semper=vulputate&rutrum=vitae&nulla=nisl&nunc=aenean&purus=lectus&phasellus=pellentesque&in=eget&felis=nunc&donec=donec&semper=quis&sapien=orci&a=eget&libero=orci&nam=vehicula&dui=condimentum&proin=curabitur&leo=in&odio=libero&porttitor=ut&id=massa&consequat=volutpat&in=convallis&consequat=morbi&ut=odio&nulla=odio&sed=elementum', tags: ['Drama'] }
]

function filteredMoviesMock (tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock {
  async getMovies () {
    return Promise.resolve(moviesMock)
  }

  async getMovie () {
    return Promise.resolve(moviesMock[0])
  }

  async createMovie () {
    return Promise.resolve(moviesMock[0].id)
  }

  async updateMovie () {
    return Promise.resolve(moviesMock[0].id)
  }

  async deleteMovie () {
    return Promise.resolve(moviesMock[0].id)
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
}