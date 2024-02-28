import React, { Component } from "react";
import { Form, Button, Header } from "tabler-react";
import "./style.css";

class DrawForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isFormVisible: true, // Initial state: form is visible
    };
  }

  handleChange(e) {
    this.props.onChange(e.target);
  }

  handleClick() {
    this.setState({ isFormVisible: false }); // Toggle visibility on click
  }


  render() {
    const {
      style,
      className,
      onSubmit,
      placeholder,
      value,
      drawItems,
      handleSkipAnimationChange,
      handleRemoveDrawnItemChange
    } = this.props;

    return (
      <div style={{ display: this.state.isFormVisible ? "block" : "none" }}> {/* Conditionally display the form */}

        <div style={style} className={className}>
          <Header.H3>Configuration</Header.H3>
          <div className="form">
            <Form onSubmit={onSubmit}>
              <Form.FieldSet>
                <Form.Group label="List of Items" isRequired>
                  <Form.Textarea
                    name="drawItems"
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox
                    name="skipAnimation"
                    label="Skip Animation"
                    onChange={handleSkipAnimationChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox
                    name="noRepeat"
                    label="Remove Drawn Item"
                    onChange={handleRemoveDrawnItemChange}
                  />
                </Form.Group>
                <Button
                  color="primary"
                  type="submit"
                  disabled={drawItems.length < 2}
                  onClick={this.handleClick}
                >
                  Configure
                </Button>
              </Form.FieldSet>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawForm;
