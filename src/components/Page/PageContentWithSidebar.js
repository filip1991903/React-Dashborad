// @flow

import * as React from "react";
import { Page, Grid } from "../";

type Props = {|
  +children?: React.Node,
  +header?: React.Node,
  +sidebar?: React.Node
|};

const PageContentWithSidebar = ({
  children,
  header,
  sidebar,
  ...rest
}: Props): React.Node => (
  <Page.Content>
    {header}
    <Grid.Row>
      <Grid.Col lg={3} className="order-lg-1 mb-4">
        {sidebar}
      </Grid.Col>
      <Grid.Col lg={9}>{children}</Grid.Col>
    </Grid.Row>
  </Page.Content>
);

export default PageContentWithSidebar;
