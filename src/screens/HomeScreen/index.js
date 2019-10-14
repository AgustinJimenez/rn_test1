import React from 'react'
import DrawerIcon from '../../components/DrawerIcon'
import { Container, Button, Icon, Fab, Text } from 'native-base'
import styles from './styles'
import { withNavigation } from 'react-navigation'
import Agenda from './components/Agenda'
import HeaderTitle from '../../components/HeaderTitle'
class HomeScreen extends React.Component {
    state = {
        active: false,
    }

    static navigationOptions = {
        headerTitle: HeaderTitle('appointment_schedule'),
        //title: 'Agenda de citas',
        headerLeft: <DrawerIcon />,
    }

    render() {
        return (
            <Container>
                <Agenda />
                <Fab
                    active={this.state.active}
                    direction='up'
                    style={styles.fab}
                    position='bottomRight'
                    onPress={() => this.setState({ active: !this.state.active })}
                >
                    <Icon name={this.state.active ? 'dots-horizontal' : 'dots-vertical'} type='MaterialCommunityIcons' />
                    <Button onPress={this.goToAgendaForm} style={styles.agendaFormButton}>
                        <Icon name='add' />
                    </Button>
                </Fab>
            </Container>
        )
    }
    goToAgendaForm = _ => this.props.navigation.push('AgendaForm')
}

export default withNavigation(HomeScreen)