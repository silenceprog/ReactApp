import React, {Component} from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk";
import {Button, Card, Container} from "react-bootstrap";
import Developers from "../img/developer.jpg";
import NatureScience from "../img/natureScience.jpg";
import Marketers from "../img/marketers.jpg";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const locales = {
    en:{title:"English"},
    ua:{title:"Ukraine"}
}

const Home = () => {
    const {t, i18n} = useTranslation();
        return (
                <Container>
                    <ul>
                        {Object.keys(locales).map((locale) => (
                            <li key={locale}><button style={{ fontWeigth:i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} type="submit" onClick={() => i18n.changeLanguage(locale)}>
                                {locales[locale].title}                          
                            </button>
                            </li>
                        ))}
                    </ul>
                     <CarouselBoxHk/>
                    <h2 className="text-center m-4">{t('main.team-header')}</h2>
                        <div className="row">
                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={Developers}
                                    />
                                    <Card.Body>
                                        <Card.Title>{t('main.team-name-1')}</Card.Title>
                                        <Card.Text>
                                            {t('main.team-desc-1')}
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/dev">{t('main.btn-text')}</Button>
                                    </Card.Body>
                                </Card>
                           </div>
                        <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={NatureScience}
                                    />
                                    <Card.Body>
                                        <Card.Title>{t('main.team-name-2')}</Card.Title>
                                        <Card.Text>
                                            {t('main.team-desc-2')}
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/nature">{t('main.btn-text')}</Button>
                                    </Card.Body>
                                </Card>
                                </div>

                                    <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={Marketers}
                                    />
                                    <Card.Body>
                                        <Card.Title>{t('main.team-name-3')}</Card.Title>
                                        <Card.Text>
                                            {t('main.team-desc-3')}
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/marketers">{t('main.btn-text')}</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                </Container>
                
        );
}
export default function WrappedApp() {
    return(
        <Suspense fallback="...loading">
            <Home />
        </Suspense>
    )
}
