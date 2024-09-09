import { Col, Container, Row } from "react-bootstrap";
import { DescTitle } from "../Title";
import { InputField } from "./End/InputFields";
import { useMediaQuery } from "react-responsive";
import { ResultComp } from "./End/Result";
import { useState } from "react";
import { Alerts } from "./End/Alerts";

interface IProps {
    type: string;
    title: string;
    subTitle: string;
    index: any;
}

export const End = ({ type, title, subTitle,index=null }: IProps) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [status, setStatus] = useState<string>("pending");
    const [taskID, setTaskID] = useState<string | null>(null);

    const [show, setShow] = useState<string>("");

    const handleShow = (text: string) => {
        setShow(text);
    };

    const handler = (flag: string) => {
        setStatus(flag);
    };

    const handleTaskID = (flag: string | null) => {
        setTaskID(flag);
    };

    const Item = (
        <>
            <Alerts show={show} handleShow={handleShow} />
            <Col style={{ marginRight: `${isMobile ? "" : "10vw"} ` }}>
                <InputField
                    handleShow={handleShow}
                    status={status}
                    handler={handler}
                    handleTaskID={handleTaskID}
                    type={type}
                    index={index}
                />
            </Col>
            <Col>
                <ResultComp handler={handler} taskID={taskID} />
            </Col>
        </>
    );
    return (
        <Container className="px-4 mt-5">
            <Row>
                <Col>
                    <DescTitle type={type} title={title} subTitle={subTitle} />
                </Col>
                {isMobile ? <></> : <Col></Col>}
            </Row>
            <Container className="p-0">
                {isMobile ? Item : <Row>{Item}</Row>}
            </Container>
        </Container>
    );
};
