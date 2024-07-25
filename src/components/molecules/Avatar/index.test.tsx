import React from 'react';
import Avatar from './index';
import {create} from 'react-test-renderer';
import {Text} from 'react-native';
import Image from 'atoms/Image';

const useStateSpy = jest.spyOn(React, 'useState');

describe('Avatar', () => {
	it('should return null when placeholder is not passed', () => {
		const AvatarComp = create(<Avatar placeholder="" />).toJSON();

		expect(AvatarComp).toBeFalsy();
	});

	describe('Image', () => {
		it('should render image', () => {
			const AvatarComp = create(
				<Avatar placeholder="Janis Commerce" imageUrl="http://www.janis.in/logo.jpg" />
			).root;

			const ImageComp = AvatarComp.findByType(Image);

			expect(ImageComp).toBeTruthy();
		});

		it('should setShowInitials to false when image onLoad', () => {
			const mockSetShowInitials = jest.fn();
			useStateSpy.mockReturnValueOnce([false, mockSetShowInitials]);

			const AvatarComp = create(
				<Avatar placeholder="Janis Commerce" imageUrl="http://www.janis.in/logo.jpg" />
			).root;

			const ImageComp = AvatarComp.findByType(Image);
			const {onLoad} = ImageComp.props;

			onLoad();

			expect(mockSetShowInitials).toHaveBeenCalledWith(false);
		});

		it('should setShowInitials to true when image onError', () => {
			const mockSetShowInitials = jest.fn();
			useStateSpy.mockReturnValueOnce([false, mockSetShowInitials]);

			const AvatarComp = create(
				<Avatar placeholder="Janis Commerce" imageUrl="http://www.janis.in/logo.jpg" />
			).root;

			const ImageComp = AvatarComp.findByType(Image);
			const {onError} = ImageComp.props;

			onError();

			expect(mockSetShowInitials).toHaveBeenCalledWith(true);
		});

		it('onErrorImage prop must be called if onError Image', () => {
			const mockOnErrorImg = jest.fn();
			const mockSetShowInitials = jest.fn();
			useStateSpy.mockReturnValueOnce([false, mockSetShowInitials]);

			const AvatarComp = create(
				<Avatar
					placeholder="Janis Commerce"
					imageUrl="http://www.janis.in/logo.jpg"
					onErrorImg={mockOnErrorImg}
				/>
			).root;

			const ImageComp = AvatarComp.findByType(Image);
			const {onError} = ImageComp.props;

			onError();

			expect(mockSetShowInitials).toHaveBeenCalledWith(true);
			expect(mockOnErrorImg).toHaveBeenCalled();
		});
	});

	it('should render placeholder', () => {
		useStateSpy.mockReturnValueOnce([true, jest.fn()]);

		const AvatarComp = create(<Avatar placeholder="Janis Commerce" />).root;

		const TextComp = AvatarComp.findByType(Text);

		expect(TextComp).toBeTruthy();
	});
});
