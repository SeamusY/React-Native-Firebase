import configureStore from '../components/config';
import setUser from '../reducers/reducer';
import * as activityActions from '../activity'

import { mock_activity } from '../../store/mock_data'

const middlewares = []
const mockStore = configureStore( middlewares )

const initialState = {}
const store = mockStore( initialState )

beforeEach( () => {
  store.clearActions();
} );

afterEach( () => {
  expect( store.getActions() ).toMatchSnapshot();
} )

test( 'Dispatch fetchActivitySucceeded action', () => {
  const { status, activity } = mock_activity

  store.dispatch( activityActions.fetchActivitySucceeded( status, activity ) );
} );