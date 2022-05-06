import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
	{ create: createFeedbackSpy },
	{ sendMail: sendMailSpy }
);

describe("Submit Feedback", () => {
	it("should be able to submit feedback", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "This is a bug",
				screenshot: "data:image/png;base64,84654adsads1",
			})
		).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalledTimes(1);
		expect(sendMailSpy).toHaveBeenCalledTimes(1);
	});

	it("should not be able to submit feedback without a type", async () => {
		await expect(
			submitFeedback.execute({
				type: "",
				comment: "This is a bug",
				screenshot: "data:image/png;base64,84654adsads1",
			})
		).rejects.toThrow();
	});

	it("should not be able to submit feedback without a comment", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "",
				screenshot: "data:image/png;base64,84654adsads1",
			})
		).rejects.toThrow();
	});
	it("should not be able to submit feedback with an invalid screenshot", async () => {
		await expect(
			submitFeedback.execute({
				type: "BUG",
				comment: "This is a bug",
				screenshot: "123.jpg",
			})
		).rejects.toThrow();
	});
});
