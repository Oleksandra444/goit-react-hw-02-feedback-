import { Component } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";

export class App extends Component  {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = ({ target: { name } }) => {this.setState(prevState => ({
      [name]: prevState[name] + 1,
  }));
  };
  
  onCountTotalFeedback = () => { return Object.values(this.state).reduce((total, curr) => (total + curr))};

  onCountPercentageFeedback = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

  
    render() 
    
    {
      const totalFeedback = this.onCountTotalFeedback();
      const positiveFeedback = this.onCountPercentageFeedback(totalFeedback);


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
        <SectionTitle title='Statistics'> {totalFeedback?<Statistic options={Object.entries(this.state)} total={totalFeedback} positivePercentage={positiveFeedback} /> : <NotificationMessage/>} </SectionTitle>
      </div>
    );
  }
};
