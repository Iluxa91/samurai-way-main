import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {updateStatus} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

describe("ProfileStatus Component", () => {

    test("status from props should be in the state", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe("component status")
    })
    test("after creation <span> should be displayed", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <input> shouldn't be displayed", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
    test("after creation <span> should contain correct status", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("component status")
    })
    test("input should be displayed in editMode instead of span", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("component status")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"component status"}
                                                updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})
