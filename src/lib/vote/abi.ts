export const voteAbi = [
	'function attributes() external view returns (tuple(address proposer, string subject, string body, uint256 period, string[] options, string bodyMimeType, string optionsMimeType))',
	'function vote(uint8[] memory percentiles) external',
]
