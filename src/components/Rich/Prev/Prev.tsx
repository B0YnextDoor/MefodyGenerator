import { Col, Container } from "react-bootstrap";
import { DescTitle } from "../../generals/Title";
import { FirstType } from "./First";
import { SecondType } from "./Second";
import { LastPrev } from "./Last";
import { useMediaQuery } from "react-responsive";

export default function PrevPage() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const Items = (
        <>
            <FirstType />
            <SecondType type="reverse" />
            <SecondType type="" />
            <LastPrev />
        </>
    );

    return (
        <Container
            className={`px-${isMobile ? "1" : "4"} mt-${isMobile ? "1" : "5"}`}
        >
            <Col>
                <DescTitle
                    type="rich"
                    title="Что из этого вам больше нравиться? "
                    subTitle="Вам нужно выбрать один из четырех вариантов форматирования в виде картинок"
                />
            </Col>

            {isMobile ? (
                Items
            ) : (
                <div
                    style={{ overflow: "auto", height: "80vh" }}
                    className="py-5"
                >
                    {Items}
                </div>
            )}
        </Container>
    );
}
