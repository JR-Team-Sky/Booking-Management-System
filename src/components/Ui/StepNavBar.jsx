import React, { Component, Fragment } from 'react';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

export default class StepNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
        }
    }

    nextStep = () => {
        this.props.getCurrentStep(this.state.currentStep + 1);
        this.setState(prevState => ({
            currentStep: prevState.currentStep + 1,
        }))
    }

    prevStep = () => {
        this.props.getCurrentStep(this.state.currentStep - 1);
        this.setState(prevState => ({
            currentStep: prevState.currentStep - 1,
        }))
    }

    render() {
        const { currentStep } = this.state;
        const { stepSetting, children } = this.props;
        return (
            <Fragment>
                <Steps current={currentStep}>
                    {stepSetting.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{children}</div>
                <div className="steps-action">
                    {currentStep < stepSetting.length - 1 && (
                        <Button type="primary" onClick={this.nextStep}>
                            Next
                    </Button>
                    )}
                    {currentStep === stepSetting.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                    </Button>
                    )}
                    {currentStep > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={this.prevStep}>
                            Previous
                    </Button>
                    )}
                </div>
            </Fragment>
        )
    }
}