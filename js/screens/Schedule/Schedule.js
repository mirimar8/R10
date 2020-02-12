import React from 'react';
import { ScrollView } from 'react-native';
import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({ data, faveIds, addFaveSession, removeFaveSession }) => {
    return (
        <ScrollView>
            <SessionList
                addFaveSession={addFaveSession}
                removeFaveSession={removeFaveSession}
                faveIds={faveIds}
                data={data} />
        </ScrollView >
    );
};

export default Schedule;