import React, { useEffect} from "react"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import cardTypesListColumns from "./cardTypesListColumns"
import { GetCardsTypessActionType, getCardsTypes } from "../../store/cardsTypes/actions"
import { AppStateType } from "../../store/reducers";


type MapStateToPropsType = {
  types: Array<any>
}
type MapDispatchToPropsType = {
  getCardsTypes: ()=>GetCardsTypessActionType
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const CardsTypes:React.FC<PropsType> = ({ types, getCardsTypes }) => {
  const paginationOption = {
    custom: true,
    totalSize: types.length,
    sizePerPage: 5,
  }
  useEffect(() => {
    getCardsTypes()
  }, [getCardsTypes])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Card Types" breadcrumbItem="Types" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(paginationOption)}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={types || []}
                        columns={cardTypesListColumns()}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <div className="search-box mr-2 mb-2 d-inline-block"></div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    classes={
                                      "table table-centered table-nowrap"
                                    }
                                    headerWrapperClasses={"thead-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-center mb-2 inner-custom-pagination">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
  types: state.cardsTypes.types,
})


export default connect<MapStateToPropsType, MapDispatchToPropsType,AppStateType>(mapStateToProps, {getCardsTypes})(
  withRouter(CardsTypes)
)
