import '../css/book-hotel.css'
import { Breadcrumbs, Button, IconButton, Typography, Link, Card, CardContent, CardHeader, Container, Chip, Stack, List, ListItem, ListItemText, Divider } from '@mui/material'
import { Accessible, ArrowBack, Directions, FavoriteBorder, Icecream, LocalMall, LocalOffer, LocalParking, Lock, Phone, Shower, SportsTennis, SportsTennisOutlined, Upload } from '@mui/icons-material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
// import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <header className="pl-header"></header>
            <main>
                <section className="pl-banner">
                    <Container className="pl-container">
                        <div className="pl-row">
                            <h1 className='pl-b__heading'>Padel Barcelona - El Part</h1>
                            <p className='pl-b_text'>Lorem ipsum dolor sit amet. (address)</p>
                        </div>
                    </Container>
                </section>
                <section className="pl-info__s">
                    <Container className="pl-container">
                        <Grid2 container spacing={2} >
                            <Grid2 item md={8} sm={12} className="pl-content" >
                                <Breadcrumbs>
                                    <Link underline="hover" color='inherit' href="/">Home</Link>
                                    <Link underline="hover" color='inherit' href="/">sub Home</Link>
                                    <Typography color="text.primary">Padel Barcelona - El Part</Typography>
                                </Breadcrumbs>
                                <Card className='pl-card__booking'>
                                    <CardContent>
                                        <Typography variant='h4' color="text.primary">Booking</Typography>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader title="The sport club"></CardHeader>
                                    <CardContent>
                                        <Typography variant="subtitle1" mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique voluptas culpa delectus fuga temporibus.</Typography>
                                        <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
                                        <Typography variant="subtitle1" mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique voluptas culpa delectus fuga temporibus.</Typography>
                                        <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid2>
                            <Grid2 md={4} sm={12} item className="pl-sidebar">
                                <Card>
                                    <CardContent>
                                        <div className="pl-map"></div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader title="Amenities"></CardHeader>
                                    <CardContent>
                                        <Stack direction="row" spacing={1} className='pl-tags'>
                                            <Chip icon={<Accessible />} label="Special access"></Chip>
                                            <Chip icon={<Icecream />} label="Snack bar"></Chip>
                                            <Chip icon={<LocalMall />} label="Store"></Chip>
                                            <Chip icon={<Lock />} label="Locker"></Chip>
                                            <Chip icon={<Shower />} label="Changing rooms"></Chip>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader title="Club opening hours"></CardHeader>
                                    <CardContent>
                                        <List sx={{width: '100%'}}>
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Monday</span>
                                                    <span>09:00 - 00:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Tuesday</span>
                                                    <span>09:00 - 00:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Wednesday</span>
                                                    <span>09:00 - 00:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Thursday</span>
                                                    <span>09:00 - 00:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Friday</span>
                                                    <span>09:00 - 00:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Saturday</span>
                                                    <span>09:00 - 23:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>Sunday</span>
                                                    <span>09:00 - 23:00</span>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemText className='pl-timetable__item pl-dfw'>
                                                    <span>* Holidays:</span>
                                                    <span>09:00 - 22:00</span>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader title="Available sports"></CardHeader>
                                    <CardContent>
                                        <Stack direction="row" spacing={1} className='pl-tags'>
                                            <Chip icon={<SportsTennisOutlined />} label="Padel"></Chip>
                                            
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid2>
                        </Grid2>
                    </Container>
                </section>
            </main>
            <footer className="pl-footer"></footer>
            {/* <div className="pl__navbar">
                <div className="pl-row">
                    <IconButton aria-label='arrow-back'>
                        <ArrowBack></ArrowBack>
                    </IconButton>
                    <IconButton aria-label='share'>
                        <Upload />
                    </IconButton>

                </div>
            </div>
            <div className="pl-content">
                <div className="pl-row">
                    <div className="pl-c__header pl-dfw">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem, ipsum dolor.</p>
                        <IconButton aria-label='like'>
                            <FavoriteBorder />
                        </IconButton>
                    </div>
                </div>
                <div className="pl-tabs">
                    <div className="pl-tabs__nav pl-dfw">
                        <button className="pl-tn__item active">Home</button>
                        <button className="pl-tn__item">Book</button>
                        <button className="pl-tn__item">Active</button>
                    </div>
                    <div className="pl__tab">
                        <div className="pl-row">
                            <h4 className="pl-tab__heading">Club information</h4>
                            <div className="pl-themes">
                                <div className="pl-theme pl-dfw">
                                    <SportsTennis />
                                    <span>Padel</span>
                                </div>
                            </div>
                            <p className="pl-avaliable">1 Avaliable counts</p>
                            <div className="pl-tags pl-dfw">
                                <div className="pl-tag pl-dfw">
                                    <LocalOffer />
                                    <span>Equirmeent rental</span>
                                </div>
                                <div className="pl-tag pl-dfw">
                                    <LocalParking />
                                    <span>Free parking</span>
                                </div>
                            </div>
                            <div className="pl-actions pl-dfw">
                                <div className="pl-action">
                                    <IconButton color='primary' className='pl-dfw'><Directions /></IconButton>
                                    <span>Directions</span>
                                </div>
                                <div className="pl-action">
                                    <IconButton className='pl-dfw'><Link /></IconButton>
                                    <span>Web</span>
                                </div>
                                <div className="pl-action">
                                    <IconButton className='pl-dfw'><Phone /></IconButton>
                                    <span>Call</span>
                                </div>
                            </div>
                            <div className="pl-map"></div>
                            <h4 className="pl-tab__heading">Opening hours</h4>
                            <div className="pl-timetable">
                                <div className="pl-tt__item pl-dfw">
                                    <span className="pl-tt__key">
                                        Monday-Sunday
                                    </span>
                                    <span className="pl-tt__value">
                                        06:00 - 02:00
                                    </span>
                                </div>
                                <div className="pl-tt__item pl-dfw">
                                    <span className="pl-tt__key">
                                        * Holidays
                                    </span>
                                    <span className="pl-tt__value">
                                        06:00 - 02:00
                                    </span>
                                </div>
                            </div>
                            <div className="pl-sp pl-dfw">
                                <h4 className="pl-tab__heading">Padel ranking</h4>
                                <a href="#" className="pl-show__more">See all</a>
                            </div>
                            <div className="pl-ranking__list pl-dfw">
                                <div className="pl-rl__item">
                                    <img src="" alt="" />
                                    <h4>Linas</h4>
                                    <p>1</p>
                                </div>
                                <div className="pl-rl__item">
                                    <img src="" alt="" />
                                    <h4>Evan</h4>
                                    <p>2</p>
                                </div>
                                <div className="pl-rl__item">
                                    <img src="" alt="" />
                                    <h4>Tadas</h4>
                                    <p>3</p>
                                </div>
                                <div className="pl-rl__item">
                                    <img src="" alt="" />
                                    <h4>Rasmus</h4>
                                    <p>4</p>
                                </div>
                            </div>
                            <h4 className="pl-tab__heading">Recent results</h4>
                            <div className="pl-result__tables pl-dfw">
                                <div className="pl-result__table pl-dfw">
                                    <div className="pl-left__part pl-rt__part">
                                        <div className="pl-lp__top pl-dfw">
                                            <div className="pl-rl__item pl-rtp__item">
                                                <img src="" alt="" />
                                                <h4>Evan</h4>
                                                <p>2</p>
                                            </div>
                                            <div className="pl-rl__item pl-rtp__item">
                                                <img src="" alt="" />
                                                <h4>Evan</h4>
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <div className="pl-lp__bottom pl-dfw">
                                            <div className="pl-rl__item pl-rtp__item">
                                                <img src="" alt="" />
                                                <h4>Evan</h4>
                                                <p>2</p>
                                            </div>
                                            <div className="pl-rl__item pl-rtp__item">
                                                <img src="" alt="" />
                                                <h4>Evan</h4>
                                                <p>2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-right__part pl-rt__part">
                                        <p className="pl-rtp__date">Oct 28 | 9:00 - 10:30</p>
                                        <h4 className="pl-score pl-rp__top">667</h4>
                                        <h4 className="pl-score pl-rp__bottom">256</h4>
                                    </div>
                                </div>
                            </div>
                            <h4 className="pl-tab__heading">Do you have an account at this club?</h4>
                            <p className="  ">1Link your account and get club benefits</p>
                            <Button variant="outlined" className='pl-link__account' color='info' size="medium">
                                Link account
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Home