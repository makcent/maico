import React, { Component } from 'react';
import classNames from 'classnames';
import { Tag } from 'antd';
import styles from './index.less';

const { CheckableTag } = Tag;

const TagSelectOption = ({ children, checked, onChange, value }) => (
  <CheckableTag checked={checked} key={value} onChange={state => onChange(value, state)}>
    {children}
  </CheckableTag>
);

TagSelectOption.isTagSelectOption = true;


export default class TagSelect extends Component {
  state = {
    expand: false,
    value: this.props.value || this.props.defaultValue || [],
  };
  UNSAFE_componentWillReceiveProps (nextProps) {
    if ('value' in nextProps && nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = value => {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (onChange) {
      onChange(value);
    }
  };

  handleTagChange = (value, checked) => {
    const checkedTags = [...this.state.value];
    const index = checkedTags.indexOf(value);
    if (checked && index === -1) {
      this.onChange(value);
    }
  };


  isTagSelectOption = node => {
    return (
      node &&
      node.type &&
      (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption')
    );
  };

  render() {
    const { value, expand } = this.state;
    const { children, className, expandable } = this.props;

    const cls = classNames(styles.tagSelect, className, {
      [styles.hasExpandTag]: expandable,
      [styles.expanded]: expand,
    });
    return (
      <div className={cls}>
        <h3>精选话题</h3>
        <div className={styles.allTag}>
          {value &&
            React.Children.map(children, child => {
              if (this.isTagSelectOption(child)) {
                return React.cloneElement(child, {
                  key: `tag-select-${child.props.value}`,
                  value: child.props.value,
                  checked: value.indexOf(child.props.value) > -1,
                  onChange: this.handleTagChange,
                });
              }
              return child;
            })}
        </div>
      </div>
    );
  }
}
TagSelect.Option = TagSelectOption;