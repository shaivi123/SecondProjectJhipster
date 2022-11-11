import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './node.reducer';
import { INode } from 'app/shared/model/node.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INodeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const NodeDetail = (props: INodeDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { nodeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Node [<b>{nodeEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="parent">Parent</span>
          </dt>
          <dd>{nodeEntity.parent}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{nodeEntity.name}</dd>
        </dl>
        <Button tag={Link} to="/node" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/node/${nodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ node }: IRootState) => ({
  nodeEntity: node.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NodeDetail);
