import { IStatus } from '@root/common/interfaces';
import React from 'react';
import { TableElementPlace } from '../../Common';
import { myTheme } from '../../../my-theme';

interface IUserPlaceProps {
  status:IStatus
}
export const UserPlace:React.FC<IUserPlaceProps> = ({ status }) => {
  if (status.isNoData) {
    return <TableElementPlace color={myTheme.colors.textDarkBlue}>No Data</TableElementPlace>;
  }
  if (status.isNoChange) {
    return <TableElementPlace color={myTheme.colors.orange}>No Changes</TableElementPlace>;
  }
  if (status.isUp) {
    return <TableElementPlace color={myTheme.colors.lightBlue}>{status.places} {status.places === 1 ? 'place' : 'places' }</TableElementPlace>;
  }
  return <TableElementPlace color={myTheme.colors.darkRed}>{status.places} {status.places === 1 ? 'place' : 'places' }</TableElementPlace>;
};
