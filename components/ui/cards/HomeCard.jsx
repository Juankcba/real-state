import React from 'react'
import { Card, Grid, Image, Text } from '@nextui-org/react'
import { Button } from '@nextui-org/react';
import { currency } from '@/utils';
const HomeCard = ({ house }) => {
    return (
        <Card css={{ h: '582px' }}>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={`/assets/img/${house.images[0]}`} alt={house.name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            </Card.Body>

            <Card.Footer

                css={{
                    position: "absolute",
                    bg: "#2C2B2B",
                    bottom: 0,
                    zIndex: 1,
                    p: "16px",
                    w: '100%',
                    h: '132px'
                }}
            >
                <Grid.Container>
                    <Grid xs={12} css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text h2>{currency.format(house.price)}</Text>
                        <Button className='btn-filled-primary'>View Details</Button>
                    </Grid>

                    <Grid xs={12} css={{ w: '100%' }}>
                        <Button.Group bordered className='btn-card-full'>
                            {house.metas.map(extra => (
                                <Button key={extra.name}>
                                    {extra.icon && (
                                        <Image src={`/assets/icons/${extra.icon}.svg`} alt={extra.icon} css={{ pr: '10px' }} />
                                    )}{extra.value + " "}
                                    {extra.name}
                                    {" " + extra.med}
                                </Button>

                            ))}

                        </Button.Group>
                    </Grid>
                </Grid.Container>

            </Card.Footer>
        </Card>
    )
}

export default HomeCard;