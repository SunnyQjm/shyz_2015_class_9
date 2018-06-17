import React from 'react'
import styled from 'styled-components';
import {
    BaseContent
} from '../base'


const ActivityContent = styled(BaseContent)`
    color: white;
`;

class ActivitiesComponent extends React.Component{
    render(){
        return (
          <ActivityContent>
              ActivitiesComponent
          </ActivityContent>
        );
    }
}

export default ActivitiesComponent;