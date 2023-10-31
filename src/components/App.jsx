import { Component } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic} from "./Statistic/Statistic";

export class App extends Component  {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = () => { };
  
  render()
    
  {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}

      >
        <SectionTitle title='Please leave feedback'>
          <FeedbackOptions options={ Object.keys(this.state)}  onLeaveFeedback={this.onLeaveFeedback}/>
        </SectionTitle>
        <SectionTitle title='Statistics'> <Statistic options={ Object.entries(this.state)}/></SectionTitle>
      </div>
    );
  }
};
