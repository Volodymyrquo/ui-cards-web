import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Col, Container, Row } from "reactstrap"
import ContactsList from "../Dashboard/contactsList/contactsList"
import { setUserSettings } from "../../store/contactsList/actions"
import {
  fetchAssets,
  getOHLCVData,
  getExchanges,
  getSymbols,
  fetchAssetsIcons,
  fetchHistoricalData,
  fetchLatestDataArray,
} from "../../helpers/api_helper_coinapi"
import Preloader from "../../components/Common/Preloader"

/* const ws = new WebSocket("ws://ws-sandbox.coinapi.io/v1/")
 */
const Requisites = () => {
  /* useEffect(() => {
    ws.addEventListener("message", e => {
      console.log(e)
    })
  }, []) */

  const message = JSON.stringify({
    type: "hello",
    apikey: "34C78562-8B50-440F-B123-370B626B5385",
    heartbeat: false,
    subscribe_data_type: ["quote"],
    subscribe_filter_asset_id: ["BTC", "ETH"],
  })

  const handleOnClick = () => {
    fetchLatestDataArray()
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl="12">
              <ContactsList />
            </Col>
          </Row>
          <div>
            <button
              type="submit"
              className="btn btn-primary w-md"
              onClick={handleOnClick}
            >
              Save settings
            </button>
          </div>
          <Preloader />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect(null, { setUserSettings })(Requisites)
